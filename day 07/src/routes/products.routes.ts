import { Router, type Request, type Response } from "express";

import { z } from "zod";

const router = Router();

const productSchema = z.object({
  name: z.string().min(3, "nama produk minimal 3 karakter"),
  price: z.number().positive("Harga harus angka positif"),
});

router.post("/products", (req: Request, res: Response) => {
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "validasi gagal",
      detail: result.error.format(),
    });
  }

  const { name, price } = result.data;

  res.status(201).json({
    pesan: "sukses",
    data: { name, price },
  });
});

export default router;
