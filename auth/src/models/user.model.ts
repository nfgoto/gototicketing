import { Schema, model, Model, Document } from "mongoose";

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

userSchema.statics.build = (attr: UserAttributes) => {
  return new User(attr);
};

export const User = model<UserDocument, UserModel>("User", userSchema);
