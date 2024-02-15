"use client";
import { ProductsTable } from "@/app/components/table/ProductsTable";
import UserDashboard from "@/app/components/users/UserDashboard";
import React from "react";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  return (
    <section>
      <ProductsTable />
    </section>
  );
};
export default Products;
