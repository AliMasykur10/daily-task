import { Router, type Request, type Response } from "express";
const router = Router();

router.post("/products", (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (!name || typeof price !== "number") {
    return res.status(400).json({
      error: "Nama Produk dan harga yang valid wajib diisi",
    });
  }
  res.status(201).json({
    pesan: "suksess",
    data: {
      name,
      price,
    },
  });
});

export default router;
