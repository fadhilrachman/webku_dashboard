import React from "react";
import Card from "../../components/Card";
import BaseInput from "../../components/BaseInput";
import BaseButton from "../../components/BaseButton";
import TextArea from "../../components/BaseInput/TextArea";
import Select from "../../components/BaseInput/Select";
import RupiahFormat from "../../components/BaseInput/RupiahFormat";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createDataExpense } from "./redux/ExpenseReducer";
import * as Yup from "yup";
const Create = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      tanggal: "",
      kategori: "",
      total_pengeluaran: "",
      deskripsi: "",
    },

    validationSchema: Yup.object({
      tanggal: Yup.string().required("tanggal harus diisi"),
      kategori: Yup.string().required("kategori harus diisi"),
      total_pengeluaran: Yup.string().required("total pengeluaran harus diisi"),
    }),
    onSubmit: (values) => {
      disptach(createDataExpense(values));
      navigate("/expense");
    },
    errors: {
      tanggal: "",
      kategori: "",
      total_pengeluaran: "",
      deskripsi: "",
    },
  });
  if (formik.errors.tanggal) {
    console.log(formik.errors);
  }
  console.log(formik.values);
  return (
    <div>
      <h1 className="text-black text-3xl">Create Data Expense</h1>
      <Card className="mt-4 w-full">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Tanggal</label>
            <BaseInput
              classname="mt-3"
              type="date"
              name="tanggal"
              onChange={formik.handleChange}
              value={formik.values.tanggal}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.tanggal && formik.touched.tanggal}
            />
            {formik.errors.tanggal && formik.touched.tanggal && (
              <small className="text-red-500">{formik.errors.tanggal}</small>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="">Kategori</label>
            <Select
              classname="mt-3"
              name="kategori"
              onChange={formik.handleChange}
              value={formik.values.kategori}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.kategori && formik.touched.kategori}
            >
              <option value="">Kategori</option>
              <option value="jajan">jajan</option>
              <option value="kebutuhan">kebutuhan</option>
              <option value="sedekah">sedekah</option>
            </Select>
            {formik.errors.kategori && formik.touched.kategori && (
              <small className="text-red-500">{formik.errors.kategori}</small>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Total Pengeluaran</label>
            <RupiahFormat
              classname="mt-3"
              placeholder="2000...."
              name="total_pengeluaran"
              onChange={formik.handleChange}
              value={formik.values.total_pengeluaran}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.errors.total_pengeluaran &&
                formik.touched.total_pengeluaran
              }
            />
            {formik.errors.total_pengeluaran &&
              formik.touched.total_pengeluaran && (
                <small className="text-red-500">
                  {formik.errors.total_pengeluaran}
                </small>
              )}
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Deskripsi</label>
            <TextArea
              classname="mt-3"
              name="deskripsi"
              onChange={formik.handleChange}
              value={formik.values.deskripsi}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mt-6 flex items-center justify-end">
            <Link to="/expense">
              <BaseButton variant="base">Back</BaseButton>
            </Link>
            <BaseButton type="submit" classname="ml-4">
              Submit
            </BaseButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Create;
