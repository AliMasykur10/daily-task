import express, { type Express, type Request, type Response } from "express";

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

app.post("/products", (req: Request, res: Response) => {
  const { name, price } = req.body;

  res.status(201).json({
    pesan: "sukses",
    data: { name, price },
  });
});

app.listen(3000, () => {
  console.log(`your server running on port 3000`);
});
