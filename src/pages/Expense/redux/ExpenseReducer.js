import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    name: "padil",
    age: 12,
  },
  {
    name: "ias",
    age: 12,
  },
  {
    name: "ajis",
    age: 12,
  },
  {
    name: "patimah",
    age: 12,
  },
];

const Expense = createSlice({
  name: "expense",
  initialState: {
    data: [],
  },
  reducers: {
    getData: (state) => {
      state.data = data;
    },
  },
});
export const { getData } = Expense.actions;
export default Expense.reducer;
