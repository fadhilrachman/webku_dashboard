import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import BaseInput from "../../components/BaseInput";
import BaseButton from "../../components/BaseButton";
import BaseTable from "../../components/BaseTable";
import { Link } from "react-router-dom";
import ModalDelete from "../../components/BaseModal/ModalDelete";
import { useSelector, useDispatch } from "react-redux";
import { getDataExpense, deleteExpense } from "./redux/ExpenseReducer";
import Select from "../../components/BaseInput/Select";
import Pagination from "../../components/BaseTable/Pagination";
const Expense = () => {
  const dispacth = useDispatch();
  const expense = useSelector((state) => state.expense);
  const dataExpense = expense?.datas?.formatResult;
  const [pagination, setPagination] = useState(1);
  const [toast, setToas] = useState(false);
  const [param, setParam] = useState({
    page: pagination,
    limit: 5,
  });
  const [showModal, setShowModal] = useState({
    status: false,
    id: "",
  });
  useEffect(() => {
    setParam({ ...param, page: pagination });
  }, [pagination]);
  useEffect(() => {
    dispacth(getDataExpense(param));
  }, [dispacth, param, expense?.isSucces]);

  const handleDelete = () => {
    dispacth(deleteExpense(showModal.id));
    setShowModal({ status: false });
    setToas(true);
    setTimeout(() => {
      setToas(false);
    }, 2000);
  };

  const column = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
    },
    {
      title: "Pengeluaran",
      dataIndex: "total_pengeluaran",
      render: (_, val) => <>Rp. {val}</>,
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
    },
    {
      title: "Deskripsi",
      dataIndex: "deskripsi",
      className: "w-40",
      render: (_, val) => {
        const format = val.split("\n");

        if (val == "") {
          return <>-</>;
        }
        return (
          <>
            {format.map((res) => (
              <p>{res}</p>
            ))}
          </>
        );
      },
    },

    {
      title: "Action",
      // dataIndex: "kelas",
      render: (item) => {
        return (
          <>
            <BaseButton
              variant="delete"
              classname="mr-3 w "
              onClick={() => setShowModal({ status: true, id: item.id })}
            >
              Delete
            </BaseButton>
            <Link to={`/expense-update/${item.id}`}>
              <BaseButton>Update</BaseButton>
            </Link>
          </>
        );
      },
    },
  ];
  console.log(toast);
  const page = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <h1 className="text-black text-3xl">Data Expense</h1>
      <div className="flex justify-between items-center">
        <div>
          <BaseInput
            onChange={(e) => console.log(e.target.value)}
            classname="mt-5 hover:opacity-60"
            placeholder="Search data..."
          />
          <Select
            classname="ml-3 py-2.5"
            onChange={(e) => setParam({ ...param, limit: e.target.value })}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Select>
        </div>
        <Link to="/expense-create">
          <BaseButton />
        </Link>
      </div>

      {toast && (
        <Card className="w-max fixed shadow right-5 bg-opacity-80 hover:cursor-pointer animate__animated animate__fadeInRight">
          <div className="flex items-center text-green-600">
            <i class="bi bi-check text-2xl"></i>
            <span>Succes Delete Data</span>
          </div>
        </Card>
      )}
      <Card className="w-full mt-4 ">
        <BaseTable
          column={column}
          data={dataExpense}
          // isLoading={expense?.isLoading}
          limit={param.limit}
          pagination={pagination}
          totalCount={expense?.datas?.paginations?.count}
          setPagination={setPagination}
          totalPage={expense?.datas?.paginations?.totalPage}
        />
      </Card>
      <ModalDelete
        show={showModal.status}
        destroy={handleDelete}
        onHide={() => setShowModal({ status: false })}
      />
    </div>
  );
};

export default Expense;
