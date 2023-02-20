import { configureStore } from "@reduxjs/toolkit";
import expense from "../pages/Expense/redux/ExpenseReducer";
import income from "../pages/Income/redux/IncomeReducer";
export const store = configureStore({
  reducer: {
    expense,
    income,
  },
});
