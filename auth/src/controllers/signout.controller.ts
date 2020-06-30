import express from "express";

const postSignout = async (req: express.Request, res: express.Response) => {
  req.session = null;

  res.json({
    message: "signed out",
  });
};

const signoutHandlers = {
  postSignout,
};

export { signoutHandlers };
