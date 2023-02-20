import Income from "../pages/Income";
import IncomeCreate from "../pages/Income/Create";
import IncomeUpdate from "../pages/Income/Update";
import Expense from "../pages/Expense";
import ExpenseCreate from "../pages/Expense/Create";
import ExpenseUpdate from "../pages/Expense/Update";
import Dashboard from "../pages/Dashboard";

const listRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/income",
    element: <Income />,
  },
  {
    path: "/income-update/:id",
    element: <IncomeUpdate />,
  },
  {
    path: "/income-create",
    element: <IncomeCreate />,
  },
  {
    path: "/expense",
    element: <Expense />,
  },
  {
    path: "/expense-update/:id",
    element: <ExpenseUpdate />,
  },
  {
    path: "/expense-create",
    element: <ExpenseCreate />,
  },
];

export default listRoutes;
