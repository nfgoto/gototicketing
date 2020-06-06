import express from "express";

const postSignout = async (req: express.Request, res: express.Response) => {
  res.json({
    message: "signout working",
  });
};

const signoutHandlers = {
  postSignout,
};

export { signoutHandlers };