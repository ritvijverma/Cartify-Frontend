// import {createSlice} from '@reduxjs/toolkit';


// const initialState ={
//     searchText:""
// }

// const searchSlice = createSlice({
//     name:"Search",
//     initialState,
//     reducers:{
//         setSearchText: (state, action) =>{
//             state.searchText =action.payload;
//         },
//         clearSearchText: (state) =>{
//             state.searchText ="";
//         }
//     }
// })

// export const { setSearchText, clearSearchText} =searchSlice.actions;
// export default searchSlice.reducer;



////updated verisoon
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async (keyword, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${keyword}`
      );
      return data.product;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error");
    }
  }
);



const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: "",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearSearchText: (state) => {
      state.searchText = "";
      state.results = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});


export const { setSearchText} =searchSlice.actions;
export default searchSlice.reducer;