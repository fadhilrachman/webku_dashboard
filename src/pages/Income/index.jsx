import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import BaseInput from "../../components/BaseInput";
import BaseButton from "../../components/BaseButton";
import BaseTable from "../../components/BaseTable";
import { Link } from "react-router-dom";
import ModalDelete from "../../components/BaseModal/ModalDelete";
import { useSelector, useDispatch } from "react-redux";
import { getDataIncome, deleteIncome } from "./redux/IncomeReducer";
import Select from "../../components/BaseInput/Select";
import Pagination from "../../components/BaseTable/Pagination";
const Income = () => {
  const dispacth = useDispatch();
  const income = useSelector((state) => state.income);
  const dataIncome = income?.datas?.result;
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
    dispacth(getDataIncome(param));
  }, [dispacth, param, income?.isSucces]);

  const handleDelete = () => {
    dispacth(deleteIncome(showModal.id));
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
      title: "Pemasukan",
      dataIndex: "total_pemasukan",
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
        if (val == "" || val == null) {
          return <>-</>;
        }
        const format = val.split("\n");
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
            <Link to={`/income-update/${item.id}`}>
              <BaseButton>Update</BaseButton>
            </Link>
          </>
        );
      },
    },
  ];
  console.log(income);
  return (
    <div>
      <h1 className="text-black text-3xl">Data Income</h1>
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
        <Link to="/income-create">
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
          data={dataIncome}
          // isLoading={expense?.isLoading}
          limit={param.limit}
          pagination={pagination}
          totalCount={income?.datas?.pagination?.count}
          setPagination={setPagination}
          totalPage={income?.datas?.pagination?.totalPage}
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

export default Income;
