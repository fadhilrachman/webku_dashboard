import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataExpense = createAsyncThunk(
  "/expense/get",
  async ({ page, limit }) => {
    const expense = await axios.get(
      `http://localhost:4000/expense?page=${page}&limit=${limit}`
    );
    return expense.data;
  }
);

export const createDataExpense = createAsyncThunk(
  "/expense/post",
  async (param) => {
    const expense = await axios.post(`http://localhost:4000/expense`, param);
    return expense.data;
  }
);

export const getDataExpenseById = createAsyncThunk(
  "/expense/get-id",
  async (id) => {
    const result = await axios.get(`http://localhost:4000/expense/${id}`);
    return result.data;
  }
);

export const deleteExpense = createAsyncThunk("/expense/delete", async (id) => {
  const expense = await axios.delete(`http://localhost:4000/expense/${id}`);
  return expense;
});

export const updateDataExpense = createAsyncThunk(
  "/expense/put",
  async (param) => {
    const { id, values } = param;
    const expense = await axios.put(
      `http://localhost:4000/expense/${id}`,
      values
    );
    return expense;
  }
);

const Expense = createSlice({
  name: "expense",
  initialState: {
    datas: [],
    data: {},
    isLoading: false,
    isError: null,
    isSucces: null,
  },
  extraReducers: {
    [getDataExpense.pending]: (state) => {
      state.isLoading = true;
      state.isSucces = false;
    },
    [getDataExpense.fulfilled]: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.isSucces = false;

      state.datas = action.payload;
    },
    [getDataExpense.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getDataExpenseById.pending]: (state) => {
      state.isLoading = true;
    },
    [getDataExpenseById.fulfilled]: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.data = action.payload;
    },
    [getDataExpenseById.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [createDataExpense.pending]: (state) => {
      state.isLoading = true;
    },
    [createDataExpense.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [createDataExpense.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [deleteExpense.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteExpense.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSucces = true;
    },
    [deleteExpense.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [updateDataExpense.pending]: (state) => {
      state.isLoading = true;
    },
    [updateDataExpense.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [updateDataExpense.rejected]: (state) => {
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
export const { getData } = Expense.actions;
export default Expense.reducer;
