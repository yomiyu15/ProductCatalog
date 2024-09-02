export interface ProductProps {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  keyfeatures: string[]; // Array of strings
  benefit: string[]; // Array of strings
  eligibleCandidates: string[]; // Array of strings
  target: string[]; // Array of strings
  crossSellingProducts: string[]; // Array of strings
  remarks: string;
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
