import React from "react";
import Card from "../../components/Card";
import BaseInput from "../../components/BaseInput";
import BaseButton from "../../components/BaseButton";
import TextArea from "../../components/BaseInput/TextArea";
import Select from "../../components/BaseInput/Select";
import RupiahFormat from "../../components/BaseInput/RupiahFormat";
import { Link } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
const Create = () => {
  const formik = useFormik({
    initialValues: {
      date: "",
      category: "",
      total_price: "",
      deskripsi: "",
    },

    validationSchema: Yup.object({
      date: Yup.string().required("tanggal harus diisi"),
      category: Yup.string().required("kategori harus diisi"),
      total_price: Yup.number().required("pengeluaran harus diisi"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    errors: {
      date: "",
      category: "",
      total_price: "",
      deskripsi: "",
    },
  });
  if (formik.errors.date && formik.touched.date) {
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
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.date && formik.touched.date}
            />
            {formik.errors.date && formik.touched.date && (
              <small className="text-red-500">{formik.errors.date}</small>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="">Kategori</label>
            <Select
              classname="mt-3"
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.category && formik.touched.category}
            >
              <option value="">Kategori</option>
              <option value="kat1">kategori1</option>
              <option value="kat2">kategori2</option>
              <option value="kat3">kategori3</option>
            </Select>
            {formik.errors.category && formik.touched.category && (
              <small className="text-red-500">{formik.errors.category}</small>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Total Pengeluaran</label>
            <RupiahFormat
              classname="mt-3"
              placeholder="2000...."
              name="total_price"
              onChange={formik.handleChange}
              value={formik.values.total_price}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.errors.total_price && formik.touched.total_price
              }
            />
            {formik.errors.total_price && formik.touched.total_price && (
              <small className="text-red-500">
                {formik.errors.total_price}
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
