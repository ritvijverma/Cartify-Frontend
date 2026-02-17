import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { Card, Col, Divider, Row, Tag, Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import ProductCard from "./Card/ProductCard";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom"; // optional
import CategoryPage from './CategoriesPage';
import BannerSlider from "../components/BannerSlide/BannerSlider";

const CategoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]); // for category filter
  const [radio, setRadio] = useState([]); // for price filter
  const [total, setTotal] = useState(0); // for pagination
  const [page, setPage] = useState(1); // for pagination
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();


  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) setCategories(data?.category);
    } catch (error) {
      // toast.error("Failed to load categories");
      console.log(error);
    }
  };

    //get total count of products for pagination
  const getTotal = async () =>{
    try{
      const {data} = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    }catch(error){
      console.log(error);
    }
  }
  
  useEffect(() =>{
        getAllCategory();
        getTotal()
},[])

  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  // get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/1`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //load more
const loadMore = async () =>{
  try{
    setLoading(true);
    const {data} =await axios.get(`/api/v1/product/product-list/${page}`);
    setLoading(false);
    setProducts([...products, ...data?.products])

  }catch(error){
    console.log(error);
    setLoading(false);
  }
}

useEffect(() =>{
  if(page === 1)  return;
    loadMore()
},[page]) 



    //filter by category and price
  const filterProduct = async () => {
    try{
      const { data } = await axios.post("/api/v1/product/product-filters", {checked, radio})
setProducts(data?.products)
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    if(!checked.length && !radio.length) {
      setPage(1);
      getAllProducts();
    }
    getAllCategory();
  }, [checked.length, radio.length]);
  useEffect(() =>{
   if(checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  const resetFilters = () =>{
    setChecked([]);
    setRadio([]);
  }

  return (
    <Layout title={"All Products - Best Offers"}>
                <BannerSlider/>
      
      {/* { JSON.stringify(checked, null)} */}{" "}
      {/* for debugging category filter */}
      {/* {JSON.stringify(radio, null)}  */} 
      <Row gutter={[24, 24]} style={{ padding: 16 }}>
        {/* LEFT SIDEBAR – CATEGORY FILTER */}
        <Col xs={24} md={6} lg={5}>
          <div
            style={{
              border: "1px solid #f0f0f0",
              borderRadius: 8,
              padding: 16,
              background: "#fff",
            }}
          >
            <h4 style={{ textAlign: "center", marginBottom: 16 }}>
              Filter By Category
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  checked={checked.includes(c._id)}
                  onChange={(e) =>
                    // console.log("Category:", c._id, e.target.checked)
                    handleFilter(e.target.checked, c._id)
                  }
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            <h4 style={{ textAlign: "center", marginBottom: 16 }}>
              Filter By Price
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Radio.Group
                value={radio}
                onChange={(e) => setRadio(e.target.value)}
              >
                {Prices?.map((p) => (
                  <Radio key={p._id} value={p.array}>
                    {p.name}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button className="ant-btn ant-btn-primary ant-btn-sm" onClick={() => resetFilters()}>Reset Filter</button>
            </div>
          </div>
        </Col>

        {/* RIGHT SIDE – PRODUCTS GRID */}
        <Col xs={24} md={18} lg={19}>
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            All Products
          </h2>

          <Row gutter={[16, 16]}>
            {products?.map((p) => (
    <ProductCard key={p._id} p={p}
    onAddToCart ={(product) =>dispatch(addToCart(product))}
    />
  ))}

          </Row>
           <div>
              {products && products.length < total && (
                    <button className="ant-btn ant-btn-primary ant-btn-sm" 
                    onClick={(e) =>{
                      e.preventDefault();
                      setPage(page + 1)
                    }}>
                 {loading ? "Loading..." : "Load More"}
                </button>
              )}
             </div>
        </Col>
         

      </Row>
            
    </Layout>
  );
};

export default CategoriesPage;
