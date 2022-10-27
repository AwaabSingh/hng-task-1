import express, { urlencoded } from "express";
import UserRoute from "./route/UserRoute";
import cors from "cors";

const app = express();

// Body parser
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(cors());

// Hook up routes
app.use("/api/me", UserRoute);

app.listen(4000, () => console.log("Server running on port 4000"));
