export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IProductRating;
  title: string;
  isFavorite: boolean;
}

export interface IProductRating {
  rate: number;
  count: number;
}

export interface IProductItem {
  product: IProduct;
  onFav: (id: number) => void;
}

export interface IPosts {
  products: IProduct[];
  onFav: (id: number) => void;
}
