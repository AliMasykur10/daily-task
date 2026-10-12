import express, { type Express, type Request, type Response } from "express";
import productRoutes from "../src/routes/product.routes.ts";
import "dotenv/config";

const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/users/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  res.send({ id, name: "Ali Masykur", role: "Developer" });
});

app.get("/search", (req: Request, res: Response) => {
  const keyword = req.query.keyword;
  const category = req.query.category;

  res.send({
    keyword,
    category,
  });
});

app.use("/api", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`your server running on port ${PORT}`);
});
