import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Col, Row, Spin, Tag, Divider } from "antd";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 80 }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>All Products</h2>

      <Row gutter={[16, 16]}>
        {products.map((p) => (
          <Col xs={24} sm={12} md={8} lg={6} key={p._id}>
            <Link to={`/dashboard/admin/product/${p.slug}`}>
              <Card
                hoverable
                cover={
                  <img
                    alt={p.name}
                    src={`/api/v1/product/product-photo/${p._id}`}
                    style={{ height: 220, objectFit: "cover" }}
                  />
                }
              >
                {/* Name */}
                <h4 style={{ marginBottom: 6 }}>{p.name}</h4>

                {/* Category */}
                <Tag color="geekblue">{p.category?.name}</Tag>

                <Divider style={{ margin: "10px 0" }} />

                {/* Price */}
                <p style={{ fontWeight: "bold", fontSize: 16 }}>
                  ₹ {p.price.toLocaleString("en-IN")}
                </p>

                {/* Quantity */}
                <p style={{ marginBottom: 4 }}>
                  Stock:{" "}
                  <span style={{ color: p.quantity > 0 ? "green" : "red" }}>
                    {p.quantity}
                  </span>
                </p>

                {/* Shipping */}
                <p style={{ marginBottom: 8 }}>
                  Shipping:{" "}
                  {p.shipping ? (
                    <Tag color="green">Available</Tag>
                  ) : (
                    <Tag color="red">Not Available</Tag>
                  )}
                </p>

                {/* Description */}
                <p style={{ fontSize: 13, color: "#666" }}>
                  {p.description}
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
