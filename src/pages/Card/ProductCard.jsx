import React from "react";
import { Button, Card, Col, Divider, Tag } from "antd";
import { Link } from "react-router-dom";

const ProductCard = ({ p , onAddToCart}) => {



  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        cover={
          <img
            alt={p.name}
            src={`${import.meta.env.VITE_API}/api/v1/product/product-photo/${p._id}`}
            style={{ height: 220, objectFit: "cover" }}
          />
        }
      >
        <h5 style={{ marginBottom: 6 }}>{p.name}</h5>

        <Tag color="geekblue">{p.category?.name}</Tag>

        <Divider style={{ margin: "10px 0" }} />

        <p style={{ fontWeight: "bold", fontSize: 16 }}>
          ₹ {p.price.toLocaleString("en-IN")}
        </p>

        <p style={{ marginBottom: 4 }}>
          Stock:{" "}
          <span style={{ color: p.quantity > 0 ? "green" : "red" }}>
            {p.quantity}
          </span>
        </p>

        <p style={{ marginBottom: 8 }}>
          Shipping:{" "}
          {p.shipping ? (
            <Tag color="green">Available</Tag>
          ) : (
            <Tag color="red">Not Available</Tag>
          )}
        </p>

        <p style={{ fontSize: 13, color: "#666" }}>
          {p.description.split("\r\n")[0].substring(0, 80)}...
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
         
          <Link to={`/product/${p.slug}`}>
          <Button size="small">More Details
            </Button></Link>
            <Link >
          <Button    disabled={p.quantity === 0}
onClick={() => onAddToCart(p)} size="small" >Add to Cart
            </Button></Link>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
