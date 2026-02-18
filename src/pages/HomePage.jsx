import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { Row, Col, Skeleton } from "antd";
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
      <VideoSection />

{loading ? (
  <Row gutter={[16, 16]}>
    {Array.from({ length: 8 }).map((_, index) => (
      <Col xs={24} sm={12} md={8} lg={6} key={index}>
        <div
          style={{
            border: "1px solid #f0f0f0",
            borderRadius: 8,
            padding: 16,
          }}
        >
          {/* Image Skeleton */}
          <Skeleton.Image
            style={{
              width: "100%",
              height: 200,
              marginBottom: 16,
              
            }}
            active
          />

          {/* Title Skeleton */}
          <Skeleton
            active
            title={{ width: "80%" }}
            paragraph={false}
          />

          {/* Price Skeleton */}
          <Skeleton
            active
            title={{ width: "40%" }}
            paragraph={false}
            style={{ marginTop: 10 }}
          />

          {/* Button Skeleton */}
          <Skeleton.Button
            active
            style={{
              width: "100%",
              marginTop: 15,
            }}
          />
        </div>
      </Col>
    ))}
  </Row>
) : (
  <Row gutter={[16, 16]}>
    {products?.map((p) => (
      <ProductCard
        key={p._id}
        p={p}
        onAddToCart={(product) => dispatch(addToCart(product))}
      />
    ))}
  </Row>
)}

    </Layout>
  );
};

export default HomePage;
