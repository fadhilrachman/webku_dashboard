import React from "react";
import Card from "../../components/Card";
import BaseInput from "../../components/BaseInput";
import BaseButton from "../../components/BaseButton";
import TextArea from "../../components/BaseInput/TextArea";
import { Link } from "react-router-dom";
import RupiahFormat from "../../components/BaseInput/RupiahFormat";
import Select from "../../components/BaseInput/Select";
const Update = () => {
  return (
    <div>
      <h1 className="text-black text-3xl">Update Data Expense</h1>
      <Card className="mt-4 w-full">
        <form>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Tanggal</label>
            <BaseInput
              onChange={(e) => console.log(e.target.value)}
              classname="mt-3"
              type="date"
              placeholder="nama..."
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="">Category</label>

            <Select classname="mt-3">
              <option value="">kategori1</option>
              <option value="">kategori2</option>
              <option value="">kategori3</option>
            </Select>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Total</label>
            <RupiahFormat
              classname="mt-3"
              placeholder="2000...."
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Deskripsi</label>
            <TextArea classname="mt-3" />
          </div>
          <div className="mt-6 flex items-center justify-end">
            <Link to="/expense">
              <BaseButton variant="base">Back</BaseButton>
            </Link>
            <BaseButton classname="ml-4">Submit</BaseButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Update;
