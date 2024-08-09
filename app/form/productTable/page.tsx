"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { deleteProduct, updateProduct } from "@/utils/action";
import { Input } from "@/components/ui/input";

type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
};

type ProductTableProps = {
  products: Array<Product>;
};

const ProductTable = ({ products }: ProductTableProps) => {
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editedProduct, setEditedProduct] = useState<Partial<Product>>({});

  const handleEditClick = (product: Product) => {
    setEditingProductId(product.id);
    setEditedProduct(product);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = async () => {
    if (editingProductId && editedProduct) {
      await updateProduct(editingProductId, editedProduct);
      setEditingProductId(null);
    }
  };

  const handleDelete = async (productId: string) => {
    await deleteProduct(productId);
  };

  return (
    <div className="p-4 space-y-8">
      <div>
        <Table>
          <TableCaption>A list of recent posts</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">
                Description
              </TableHead>
              <TableHead className="hidden md:table-cell text-right">
                Category
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  {editingProductId === product.id ? (
                    <Input
                      type="text"
                      name="title"
                      value={editedProduct.title || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    product.title
                  )}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {editingProductId === product.id ? (
                    <Input
                      type="text"
                      name="description"
                      value={editedProduct.description || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    product.description
                  )}
                </TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  {editingProductId === product.id ? (
                    <Input
                      type="text"
                      name="category"
                      value={editedProduct.category || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    product.category
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center space-x-1">
                    {editingProductId === product.id ? (
                      <>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={() => setEditingProductId(null)}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </Button>
                        <Button onClick={() => handleEditClick(product)}>
                          Edit
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductTable;
