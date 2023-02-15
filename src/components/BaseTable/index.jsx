import React from "react";

const index = ({ column }) => {
  const data = [
    {
      nama: "padil",
      kelas: "12",
    },
    {
      nama: "padil",
      kelas: "12",
    },
    {
      nama: "padil",
      kelas: "12",
    },
    {
      nama: "padil",
      kelas: "12",
    },
    {
      nama: "padil",
      kelas: "12",
    },
  ];
  return (
    <table className="w-full rounded" border="1">
      <thead>
        <tr className="border-b">
          <th className="py-3">#</th>
          {column.map((res) => (
            <th className="py-3">{res.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((val, index) => (
          <tr className="text-center border-y">
            <td className=" p-3">{index + 1}</td>
            {column.map((valCol, key) =>
              valCol.render ? (
                <td className=" p-3" key={key}>
                  {valCol.render(val)}
                </td>
              ) : (
                <td className=" p-3" key={key}>
                  {val[valCol.dataIndex]}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default index;
