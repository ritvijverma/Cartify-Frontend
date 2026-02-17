import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./Card/ProductCard";
import Layout from "../components/Layouts/Layout";

const SearchPage = () => {
  const { results, loading, error } = useSelector(
    (state) => state.search
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Layout>
      <h2>Search Results</h2>
<Row gutter={[16, 16]}>
  {results.map((p) => (
    <ProductCard key={p._id} p={p} />
  ))}
</Row>
    </Layout>
  );
};

export default SearchPage;
