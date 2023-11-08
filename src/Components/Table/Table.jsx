import { useMemo } from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";
import { BsDatabaseDash } from "react-icons/bs";
import { MdUpdate, MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Table({ data, refetch }) {
  const columns = useMemo(
    () => [
      {
        Header: "Food Image",
        accessor: "foodImage",
      },
      {
        Header: "Food Name",
        accessor: "foodName",
      },
      {
        Header: "Food Quantity",
        accessor: "foodQuantity",
      },
      {
        Header: "Expire Date",
        accessor: "expiredDateTime",
      },
      {
        Header: "Donator Name",
        accessor: "donator.name",
      },
      {
        Header: "Donator image",
        accessor: "donator.image",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: ({ row }) => (
          <div className="flex gap-3">
            <Link to={`/food-update/${row.original._id}`}>
              <button className="btn">
                <MdUpdate className="text-xl text-green-400"></MdUpdate>{" "}
              </button>
            </Link>
            <Link to={`/manage-single-food/${row.original._id}`}>
              <button className="btn">
                <MdOutlineManageAccounts className="text-xl text-orange-400"></MdOutlineManageAccounts>{" "}
              </button>
            </Link>
            <button className="btn">
              {" "}
              <BsDatabaseDash
                className="text-xl text-red-400"
                onClick={() => deleteFood(row.original._id)}
              ></BsDatabaseDash>{" "}
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const deleteFood = (id) => {
    axios
      .delete(`http://localhost:5000/foods/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.error("Data deleted from database");
        }
        refetch();
      })
      .then((error) => {
        console.log(error);
      });
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="text-center flex justify-center h-screen my-10">
      <div className="overflow-auto rounded-lg">
        <table
          {...getTableProps()}
          className="lg:table-md table-sm table-zebra border-2"
        >
          <thead className="bg-sky-700 text-white h-16">
            {headerGroups.map((headerGroup) => (
              <tr
                className=""
                key={headerGroup.id}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    className="px-5"
                    key={column.id}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="divide-y divide-gray-200 gap-x-4"
          >
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td key={cell.column.id} {...cell.getCellProps()}>
                      {cell.column.id === "foodImage" ||
                      cell.column.id === "donator.image" ? (
                        <div className="flex justify-center">
                          <img
                            src={cell.value}
                            alt="Image"
                            className="w-10 h-10 rounded"
                          />
                        </div>
                      ) : (
                        cell.render("Cell")
                      )}{" "}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  refetch: PropTypes.func,
  row : PropTypes.object,
};

export default Table;
