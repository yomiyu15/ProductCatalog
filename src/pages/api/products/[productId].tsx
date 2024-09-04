import type { NextApiRequest, NextApiResponse } from 'next'
import productsData from '../../data/products.json';

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {

  //  Split the URL by the forward slash and extract the last element (id)
  const productId = req.url?.split("/").pop();

  //  Find the product with the given id
  const product = productsData.find((p) => p.id === parseInt(productId!));

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}
