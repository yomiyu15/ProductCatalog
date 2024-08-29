export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

export interface ProductCatalogProps {
  product: ProductProps;
  index: number;
}

export interface NoProductFound {
  isBack: boolean;
}
