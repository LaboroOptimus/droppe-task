import * as React from "react";
import lodash from "lodash";
import { FaStar } from "react-icons/fa";
import styles from "./product-list.module.scss";

// category: "men's clothing"
// description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description."
// id: 4
// image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
// price: 15.99
// rating: {rate: 2.1, count: 430}
// title: "Mens Casual Slim Fit"

interface Posts {
  products: Array<Product>;
  onFav: (title: string) => void;
}

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ProductRating;
  title: string;
  isFavorite: boolean;
}

interface ProductRating {
  rate: number;
  count: number;
}

export const Posts: React.FC<any> = ({ products, onFav }) => {
  return products.reverse().map((item: Product, idx: number) => {
    return <Product key={item.id} index={idx} product={item} onFav={onFav} />;
  });
};

export const Product: React.FC<{
  index: number;
  product: {
    title: string;
    description: string;
    price: number;
    isFavorite: boolean;
    rating: { rate: number; count: number };
  };
  onFav: (title: string) => void;
}> = ({ product, onFav }) => {
  const {
    product: productClass,
    productBody,
    actionBarItem,
    actionBarItemLabel,
  } = styles;
  // Problem: Now product title can be too long, I just put overflowX as fix now
  return (
    <span className={styles.prosu}>
      <span className={styles.productTitle}>{product.title}</span>
      <p>
        <strong>
          Rating: {product.rating ? `${product.rating.rate}/5` : ""}
        </strong>
      </p>
      <p>
        <b>Price: ${+product.price}</b>
      </p>
      <p className={styles.productBody}>
        <span>
          <b>Description:</b>
        </span>
        <br />
        {product.description}
      </p>

      <span
        className={styles.actionBar}
        style={{ display: "table", width: "100%" }}
      >
        <span
          className={`${styles.actionBarItem} ${
            product.isFavorite ? "active" : ""
          }`}
          role="button"
          onClick={() => {
            onFav(product.title);
          }}
        >
          <FaStar />{" "}
          <span className={styles.actionBarItemLabel}>
            {!!!!product.isFavorite
              ? "Remove from favorites"
              : "Add to favorites"}
          </span>
        </span>
      </span>
    </span>
  );
};
