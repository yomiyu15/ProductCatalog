import type { NextApiRequest, NextApiResponse } from 'next'
import productsData from '../../data/products.json';

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(productsData)
}
