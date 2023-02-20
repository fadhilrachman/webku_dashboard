import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataIncome = createAsyncThunk(
  "/income/get",
  async ({ page, limit }) => {
    const income = await axios.get(
      `http://localhost:4000/income?page=${page}&limit=${limit}`
    );
    return income.data;
  }
);

export const createDataIncome = createAsyncThunk(
  "/income/post",
  async (param) => {
    const income = await axios.post(`http://localhost:4000/income`, param);
    return income.data;
  }
);

export const getDataIncomeById = createAsyncThunk(
  "/income/get-id",
  async (id) => {
    const result = await axios.get(`http://localhost:4000/income/${id}`);
    return result.data;
  }
);

export const deleteIncome = createAsyncThunk("/income/delete", async (id) => {
  const income = await axios.delete(`http://localhost:4000/income/${id}`);
  return income;
});

export const updateDataIncome = createAsyncThunk(
  "/income/put",
  async (param) => {
    const { id, values } = param;
    const income = await axios.put(
      `http://localhost:4000/income/${id}`,
      values
    );
    return income;
  }
);

const Income = createSlice({
  name: "Income",
  initialState: {
    datas: [],
    data: {},
    isLoading: false,
    isError: null,
    isSucces: null,
  },
  extraReducers: {
    [getDataIncome.pending]: (state) => {
      state.isLoading = true;
      state.isSucces = false;
    },
    [getDataIncome.fulfilled]: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.isSucces = false;

      state.datas = action.payload;
    },
    [getDataIncome.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getDataIncomeById.pending]: (state) => {
      state.isLoading = true;
    },
    [getDataIncomeById.fulfilled]: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.data = action.payload;
    },
    [getDataIncomeById.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [createDataIncome.pending]: (state) => {
      state.isLoading = true;
    },
    [createDataIncome.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [createDataIncome.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [deleteIncome.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteIncome.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSucces = true;
    },
    [deleteIncome.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [updateDataIncome.pending]: (state) => {
      state.isLoading = true;
    },
    [updateDataIncome.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [updateDataIncome.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
  // reducers: {
  //   getData: (state) => {
  //     state.data = data;
  //   },
  // },
});
export const { getData } = Income.actions;
export default Income.reducer;
