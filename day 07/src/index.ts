import express, { type Express, type Request, type Response } from "express";
import "dotenv/config";
import router from "./routes/products.routes.js";

const app: Express = express();
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`your server running on port ${PORT} `);
});
