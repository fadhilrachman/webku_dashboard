import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import BaseInput from "../../components/BaseInput";
import BaseButton from "../../components/BaseButton";
import BaseTable from "../../components/BaseTable";
import { Link } from "react-router-dom";
import ModalDelete from "../../components/BaseModal/ModalDelete";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./redux/ExpenseReducer";
import Select from "../../components/BaseInput/Select";
const Expense = () => {
  const dispacth = useDispatch();
  const expense = useSelector((state) => state.expense);
  const [showModal, setShowModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    dispacth(getData());
  }, [dispacth]);

  console.log(expense);
  const column = [
    {
      title: "name",
      dataIndex: "nama",
    },
    {
      title: "kelas",
      dataIndex: "kelas",
    },
    {
      title: "Action",
      // dataIndex: "kelas",
      render: (item) => {
        return (
          <>
            <BaseButton
              variant="delete"
              classname="mr-3"
              onClick={() => setShowModal(true)}
            >
              Delete
            </BaseButton>
            <Link to="/expense-update">
              <BaseButton>Update</BaseButton>
            </Link>
          </>
        );
      },
    },
  ];
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
          <Select classname="ml-3 py-2.5">
            <option value="10">10</option>
            <option value="10">20</option>
            <option value="10">30</option>
          </Select>
        </div>
        <Link to="/expense-create">
          <BaseButton />
        </Link>
      </div>

      <Card className="w-full mt-4 ">
        <BaseTable column={column} />
      </Card>
      <ModalDelete show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
};

export default Expense;
