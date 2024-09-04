import React, { useState, useEffect } from "react";
import { fetchProductById } from "@/utils";
import { ProductProps } from "@/types";
import NoProductFound from "@/pages/components/no_product_found";
import { useRouter } from "next/router";
import SingleProduct from "@/pages/components/single_product";
import SingleProductSkeleton from "../components/single_product_sketleton";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState<ProductProps | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!productId) return;

      try {
        setLoading(true);
        const data = await fetchProductById(productId as string);
        if (data) {
          setProduct(data);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        setError("Failed to fetch product details");
        console.error("Error fetching data with id", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [productId]);

  if (isLoading) {
    return <SingleProductSkeleton />;
  }

  if (error) {
    return <NoProductFound isBack={true} />;
  }

  if (!product) {
    return <NoProductFound isBack={true} />;
  }

  return <SingleProduct product={product} />;
};

export default ProductDetail;
