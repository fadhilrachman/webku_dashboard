import Income from "../pages/Income";
import Expense from "../pages/Expense";
import ExpenseCreate from "../pages/Expense/Create";
import ExpenseUpdate from "../pages/Expense/Update";

const listRoutes = [
  {
    path: "/",
    element: <Income />,
  },
  {
    path: "/income",
    element: <Income />,
  },
  {
    path: "/expense",
    element: <Expense />,
  },
  {
    path: "/expense-update",
    element: <ExpenseUpdate />,
  },
  {
    path: "/expense-create",
    element: <ExpenseCreate />,
  },
];

export default listRoutes;
