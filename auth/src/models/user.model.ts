import { Schema, model, Model, Document } from "mongoose";
import { PasswordService } from "../services";

// for type checking schema attributes
interface UserAttributes {
  email: string;
  password: string;
}

// describe extended mongoose model
interface UserModel extends Model<UserDocument> {
  build(attr: UserAttributes): UserDocument;
}

// describes a User document
interface UserDocument extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await PasswordService.toHash(this.get("password"));
    this.set("password", hashed);
  }

  done();
});

userSchema.statics.build = (attr: UserAttributes) => {
  return new User(attr);
};

export const User = model<UserDocument, UserModel>("User", userSchema);
