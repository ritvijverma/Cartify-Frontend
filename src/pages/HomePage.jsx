import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { Row } from "antd";
import ProductCard from "./Card/ProductCard";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import BannerSlider from "../components/BannerSlide/BannerSlider";
import VideoSection from "../components/VideoSection/VideoSection";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();


  // Get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/get-product`);
      setLoading(false);
      setProducts(data?.products)

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };



  useEffect(() => {
    getAllProducts();
  },[] );

  return (
    <Layout title={"All Products"}>
      <VideoSection/>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        All Products
      </h2>
   

      <Row gutter={[16, 16]}>
        {products?.map((p) => (
          <ProductCard
            key={p._id}
            p={p}
            onAddToCart={(product) => dispatch(addToCart(product))}
          />
        ))}
      </Row>


    </Layout>
  );
};

export default HomePage;
