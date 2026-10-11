import { Router, type Request, type Response } from "express";
const router = Router();

router.post("/products", (req: Request, res: Response) => {
  const { name, price } = req.body;

  res.status(201).json({
    pesan: "sukses",
    data: { name, price },
  });
});

export default router;
