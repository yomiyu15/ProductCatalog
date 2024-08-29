import React, { useState, useEffect } from "react";
import { fetchProductById } from "@/utils";
import { ProductProps } from "@/types";
import NoProductFound from "@/pages/components/no_product_found";
import SingleProductSkeleton from "@/pages/components/single_product_sketleton";
import { useRouter } from "next/router";
import SingleProduct from "@/pages/components/single_product";

const ProductDetail = () => {
  const router = useRouter();
  const initialProduct: ProductProps = {
    id: 0,
    name: "",
    price: 0,
    image: "",
    description: "",
  };
  const { productId } = router.query;
  const [product, setProduct] = useState<ProductProps>(initialProduct);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(productId: any) {
      try {
        const data = await fetchProductById(productId);

        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data with id", error);
      }
    }

    if (productId) {
      fetchData(productId);
    }
  }, [productId]);

  if (isLoading) {
    return <SingleProductSkeleton />;
  }

  if (!product) {
    return <NoProductFound isBack={true} />;
  }

  return <SingleProduct product={product} />;
};

export default ProductDetail;
