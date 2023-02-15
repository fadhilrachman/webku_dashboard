import { configureStore } from "@reduxjs/toolkit";
import expense from "../pages/Expense/redux/ExpenseReducer";
export const store = configureStore({
  reducer: {
    expense,
  },
});
