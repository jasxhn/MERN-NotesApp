import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./src/middleware/rateLimiter.js";
import who from "./src/middleware/who.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(cors({
  origin: "http://localhost:5173",
}));


//middleware
app.use(express.json()); //first - very important middleware for req.body

app.use(rateLimiter)
app.use(who)


app.use("/api/notes", notesRoutes); //comes second

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on PORT:", PORT);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
