import express from "express";
import jwt from "jsonwebtoken";

const getCurrentUser = async (req: express.Request, res: express.Response) => {
  res.json({ data: { currentUser: req.currentUser || null } });
};

const currentUserHandlers = {
  getCurrentUser,
};

export { currentUserHandlers };
