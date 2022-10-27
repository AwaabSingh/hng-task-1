import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    slackUsername: "Awaab",
    backend: true,
    age: 21,
    bio: "Hi there! I'm  Abdul-Fattah, a Cyber Security Student and  A passionate Full Stack Software Developer. Am in the Backend Development tract at HNGI9",
  });
});

export default router;
