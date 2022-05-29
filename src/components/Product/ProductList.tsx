import React from "react";
import cn from "classnames";
import { IProductItem, IProduct, IPosts } from "./types";
import { FaStar } from "react-icons/fa";
import styles from "./ProductList.module.scss";

export const Posts: React.FC<IPosts> = ({ products, onFav }) => {
  return (
    <>
      {products.map((item: IProduct) => {
        return <Product key={item.id} product={item} onFav={onFav} />;
      })}
    </>
  );
};

export const Product: React.FC<IProductItem> = ({ product, onFav }) => {
  return (
    <div className={styles.product}>
      <span className={styles.productTitle}>{product.title}</span>
      <p>Rating: {product.rating ? `${product.rating.rate}/5` : ""}</p>
      <p>Price: ${+product.price}</p>
      <p className={styles.productBody}>
        <span>Description:</span>
        <br />
        {product.description}
      </p>
      <button
        onClick={() => {
          onFav(product.id);
        }}
        className={cn(styles.action, product.isFavorite && styles.actionActive)}
      >
        <FaStar />
        {product.isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};
