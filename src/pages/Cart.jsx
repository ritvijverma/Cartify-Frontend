import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Button, Divider, Empty } from "antd";
import Layout from "../components/Layouts/Layout";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  // Total Price Calculation
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div style={{ padding: "40px 60px" }}>
        <Row gutter={[32, 32]}>
          
          {/* LEFT SIDE – CART ITEMS */}
          <Col xs={24} md={16}>
            <h1 style={{ marginBottom: 20 }}>Your Cart</h1>

            {cart.length === 0 ? (
              <Empty description="Your Cart is Empty" />
            ) : (
              cart.map((item) => (
                <Card
                  key={item._id}
                  style={{
                    marginBottom: 20,
                    borderRadius: 12,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <Row align="middle" gutter={16}>
                    
                    {/* Product Image */}
                    <Col xs={24} sm={6}>
                      <img
                        src={`${import.meta.env.VITE_API}/api/v1/product/product-photo/${item._id}`}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: 120,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                    </Col>

                    {/* Product Details */}
                    <Col xs={24} sm={8}>
                      <h4 style={{ marginBottom: 5 }}>{item.name}</h4>
                      <p style={{ color: "#1677ff", fontWeight: "bold" }}>
                        ₹ {item.price.toLocaleString("en-IN")}
                      </p>
                    </Col>

                    {/* Quantity Controls */}
                    <Col xs={24} sm={5}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <Button
                          size="small"
                          onClick={() => dispatch(removeFromCart(item._id))}
                        >
                          -
                        </Button>

                        <span>{item.quantity}</span>

                        <Button
                          size="small"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </Button>
                      </div>
                    </Col>

                    {/* Remove Button */}
                    <Col xs={24} sm={5}>
                      <Button
                        danger
                        onClick={() => dispatch(removeFromCart(item._id))}
                      >
                        Remove
                      </Button>
                    </Col>

                  </Row>
                </Card>
              ))
            )}
          </Col>

          {/* RIGHT SIDE – ORDER SUMMARY */}
          <Col xs={24} md={8}>
            <Card
              style={{
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <h3>Order Summary</h3>
              <Divider />

              <p>Total Items: {cart.length}</p>

              <p style={{ fontWeight: "bold", fontSize: 16 }}>
                Total Price: ₹ {totalPrice.toLocaleString("en-IN")}
              </p>

              <Divider />

              <Button
                type="primary"
                block
                size="large"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Col>

        </Row>
      </div>
    </Layout>
  );
};

export default CartPage;
