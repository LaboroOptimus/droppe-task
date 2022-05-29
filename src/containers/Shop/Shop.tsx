import React, { useState, useEffect } from "react";
import cn from "classnames";
import { FaTimes } from "react-icons/fa";
import { Button, ModalWindow, Logo } from "../../common";
import { Posts, Form, Message } from "../../components";
import { LoadingStatus } from "../../types";
import { shopApp1, shopApp2 } from "../../images";
import { fetchProducts, updateProducts } from "../../api/product-page";

import styles from "./Shop.module.scss";

export const ShopApp = () => {
  const [products, setProducts] = useState<any>([]);
  const [productsFetchStatus, setProductsFetchStatus] = useState<LoadingStatus>(
    LoadingStatus.None
  );
  const [productsUpdateStatus, setProductsUpdateStatus] =
    useState<LoadingStatus>(LoadingStatus.None);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isShowingMessage, setIsShowingMessage] = useState<boolean>(false);
  const [numFavorites, setNumFavorites] = useState<number>(0);

  useEffect(() => {
    setProductsFetchStatus(LoadingStatus.Pending);
    fetchProducts().then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
        setProductsFetchStatus(LoadingStatus.Success);
      } else {
        setProductsFetchStatus(LoadingStatus.Error);
      }
    });

    return () => {
      setProductsFetchStatus(LoadingStatus.None);
      setProductsUpdateStatus(LoadingStatus.None);
    };
  }, []);

  const handleFavorite = (id: number) => {
    const idx = products.findIndex((item: any) => item.id === id);
    const isFavoriteValue = products[idx].isFavorite ? false : true;
    setProducts(
      products.map((item: any) =>
        item.id === id ? { ...item, isFavorite: isFavoriteValue } : item
      )
    );
    setNumFavorites(isFavoriteValue ? numFavorites + 1 : numFavorites - 1);
  };

  const handleSubmit = (title: string, description: string, price: string) => {
    setProducts([
      ...products,
      {
        id: Math.floor(Math.random() * 100000),
        title,
        description,
        price: +price,
      },
    ]);
    setIsOpen(false);
    setIsShowingMessage(true);

    updateProducts(title, description, +price).then((res) => {
      if (res.status === 200) {
        setProductsUpdateStatus(LoadingStatus.Success);
      } else {
        setProductsUpdateStatus(LoadingStatus.Error);
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Logo />
      </div>

      <div className={cn(styles.container, styles.topImages)}>
        <img src={shopApp1} />
        <img src={shopApp2} />
      </div>

      <div className={cn(styles.container, styles.main)}>
        <Button onClick={() => setIsOpen(true)} text="Send product proposal" />

        {isShowingMessage && productsUpdateStatus !== LoadingStatus.Success && (
          <Message className={styles.message} text={"Adding product..."} />
        )}
        <Message
          text={`Total products: ${products.length} - Number of favorites: ${numFavorites}`}
        />

        {productsFetchStatus === LoadingStatus.Success ? (
          <Posts products={products} onFav={handleFavorite} />
        ) : (
          <Message text={"Loading products ..."} />
        )}
      </div>
      <ModalWindow isOpen={isOpen}>
        <div className={styles.modalContentHelper}>
          <div className={styles.modalClose} onClick={() => setIsOpen(false)}>
            <FaTimes />
          </div>
          <Form handleSubmit={handleSubmit} />
        </div>
      </ModalWindow>
    </div>
  );
};
