import express, { Request, Response, NextFunction } from "express";
import { UserResponse } from "../dto";

const router = express.Router();

router.get("/intent", (req: Request, res: Response, next: NextFunction) => {
  const { age, backend, bio, slackUsername } = <UserResponse>req.body;

  if (!age || !backend || !bio || !slackUsername) {
    res.status(400).json({
      message: "Input all field",
    });
  }

  res.status(200).json({
    age,
    backend,
    bio,
    slackUsername,
  });
});

export default router;
