import express, { Request, Response, NextFunction } from "express";

enum OperationInput {
  addition,
  subtraction,
  multiplication
}
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    slackUsername: "Awaab",
    backend: true,
    age: 21,
    bio: "Hi there! I'm  Abdul-Fattah, a Cyber Security Student and  A passionate Full Stack Software Developer. Am in the Backend Development tract at HNGI9",
  });
});

router.post("/operations", (req: Request, res: Response, next: NextFunction) => {
  const { operation_type, x, y } = req.body;
   
  const add = (x: number,y: number) => x+y;
  const sub = (x: number,y: number) => x-y;
  const mult = (x: number,y: number) => x*y;

 

  if(operation_type === 'addition') {
    return res.status(200).json({
      slackUsername: "Awaab",
      operation_type,
      result: add(x,y)})
  } else if(operation_type === 'subtraction') {
    return res.status(200).json({
      slackUsername: "Awaab",
      operation_type,
      result: sub(x,y)})
  } else if(operation_type === 'multiplication') {
    return res.status(200).json({
      slackUsername: "Awaab",
      operation_type,
      result: mult(x,y)})
  } else {
    return res.status(400).json({
      msg: 'Wrong Operation'
    })
  }
  


});

export default router;
