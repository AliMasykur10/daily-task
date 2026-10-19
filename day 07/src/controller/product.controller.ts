import { type Request, type Response } from "express";
import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(3, "nama produk minimal 3 karakter"),
  stock: z.number().min(0, "stock tidak boleh minus"),
  price: z.number().positive("Harga harus angka positif"),
  category: z.string().min(2, "kategory minimal 2 karakter"),
});

export const createProduct = (req: Request, res: Response) => {
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "validasi gagal",
      detail: result.error.format(),
    });
  }

  const { name, stock, price, category } = result.data;

  return res.status(201).json({
    pesan: "sukses",
    data: { name, stock, price, category },
  });
};
