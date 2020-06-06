import express from "express";

const postSignin = async (req: express.Request, res: express.Response) => {
  res.json({
    message: "signin working",
  });
};

const signinHandlers = {
  postSignin,
};

export { signinHandlers };
