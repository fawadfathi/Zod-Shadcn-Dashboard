"use server";

import db from "./db";
import { revalidatePath } from "next/cache";

interface ValuesProps {
  title: string;
  description: string;
  category: string;
}

export const addProduct = async (values: ValuesProps) => {
  const product = await db.product.create({
    data: {
      title: values.title,
      description: values.category,
      category: values.description,
    },
  });

  revalidatePath("/dashboard/new");
};

export const deleteProduct = async (productId: string) => {
  const product = await db.product.delete({
    where: {
      id: productId,
    },
  });

  revalidatePath("/dashboard");
};

export const updateProduct = async (
  productId: string,
  data: { [key: string]: any }
) => {
  const product = await db.product.update({
    where: {
      id: productId,
    },
    data,
  });

  revalidatePath("/dashboard");

  return product;
};
