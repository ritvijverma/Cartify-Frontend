import { Button, Card, Col, Divider, Row, Spin, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
const { Title, Paragraph, Text } = Typography;
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const SingleProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  const getProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/getsingle-product/${slug}`,
      );
      setProduct(data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (slug) getProduct();
  }, [slug]);

  if (loading) return <Spin size="large" />;
 return (
  <Layout>
    {product && (
      <div style={{ padding: "40px 60px" }}>
        <Row gutter={[48, 48]}>
          
          {/* LEFT SIDE IMAGE */}
          <Col xs={24} md={12}>
            <img
              src={`${import.meta.env.VITE_API}/api/v1/product/product-photo/${product._id}`}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: 12,
                  height: "400px",   // 👈 fixed height

                objectFit: "cover",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
              }}
            />
          </Col>

          {/* RIGHT SIDE DETAILS */}
          <Col xs={24} md={12}>
            <Title level={3 }>{product.name}</Title>

            <Tag color="blue" style={{ marginBottom: 15 }}>
              {product.category?.name}
            </Tag>


            <Title level={3} style={{ color: "#1677ff" }}>
              ₹ {product.price.toLocaleString("en-IN")}
            </Title>
                        <Divider />


            <Paragraph style={{ marginTop: 20, fontSize: 16 }}>
              {product.description}
            </Paragraph>

            <Text strong>
              Stock:{" "}
              <span
                style={{
                  color: product.quantity > 0 ? "green" : "red",
                }}
              >
                {product.quantity}
              </span>
            </Text>

            <br />
            <br />

            <Button
              type="primary"
              size="large"
              style={{
                width: "100%",
                height: 45,
                fontSize: 16,
                
              }}
  disabled={product.quantity === 0}
  onClick={() => dispatch(addToCart(product))}            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </div>
    )}
  </Layout>
);

};

export default SingleProductDetails;
