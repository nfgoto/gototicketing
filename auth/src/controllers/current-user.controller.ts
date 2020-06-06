import express from "express";

const getCurrentUser = async (req: express.Request, res: express.Response) => {
  res.json({
    message: "current user is toto",
  });
};

const currentUserHandlers = {
  getCurrentUser,
};

export { currentUserHandlers };
