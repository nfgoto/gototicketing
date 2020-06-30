import request from "supertest";
import { app } from "../../app";

it("clears the cookie after signing out", async () => {
  const EMAIL = "test@test.com";

  const signupResponse = await request(app)
    .post("/api/users/signup")
    .send({
      email: EMAIL,
      password: "password",
    })
    .expect(201);

  const cookie = signupResponse.get("Set-Cookie");

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send({})
    .expect(200);

  expect(response.body.data.currentUser.email).toEqual(EMAIL);
});
