import React, { useState } from "react";
import Pagination from "./Pagination";

const BaseTable = ({
  column,
  data,
  limit,
  pagination,
  setPagination,
  totalPage,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <table className="w-full rounded" border="1">
        <thead>
          <tr className="border-b">
            <th className="py-3">#</th>
            {column.map((res) => (
              <th className="py-3">{res.title}</th>
            ))}
          </tr>
        </thead>
        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        <tbody>
          {loading ? (
            <tr className=" ">
              <td colSpan={column.length + 1} className="text-center  p-5">
                <div class="flex justify-center items-center">
                  <div class="animate-spin rounded-full h-10 w-10 border-t-white border-2  border-sky-500"></div>
                </div>
              </td>
            </tr>
          ) : data?.length == 0 ? (
            <tr className=" ">
              <td colSpan={column.length + 1} className="text-center  p-5">
                Tidak ada data...
              </td>
            </tr>
          ) : (
            data?.map((val, index) => {
              console.log("ini index " + index);
              return (
                <tr className="text-center  border-y hover:bg-neutral-100 hover:cursor-pointer">
                  <td className=" p-3">
                    {/* ii {index} */}
                    {++index + (pagination * limit - limit)}
                  </td>

                  {column.map((valCol, key) =>
                    valCol.render ? (
                      <td className={`p-3 ${valCol.className}`} key={key}>
                        {valCol.render(val, val[valCol.dataIndex])}
                      </td>
                    ) : (
                      <td className=" p-3" key={key}>
                        {val[valCol.dataIndex]}
                      </td>
                    )
                  )}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <span></span>
        <Pagination
          totalPage={totalPage}
          pagination={pagination}
          setPagination={setPagination}
          limit={limit}
        />
      </div>
    </>
  );
};

export default BaseTable;
