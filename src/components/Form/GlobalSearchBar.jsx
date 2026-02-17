import React from "react";
import { Input, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, searchProducts } from "../../features/SearchSlice";
import { useNavigate } from "react-router-dom";


const GlobalSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchText);
  const navigate = useNavigate();


  const handleSearch = () => {
    // console.log("Searching:", searchText);
    if(searchText.trim() !==""){
      dispatch(searchProducts(searchText))
          navigate(`/search/${searchText}`);

    }
  };

  return (
    <Space>
      <Input
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        style={{ width: 200 }}
      />
      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </Space>
  );
};

export default GlobalSearchBar;
