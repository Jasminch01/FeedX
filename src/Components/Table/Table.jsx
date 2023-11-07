import { useMemo } from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

function Table({ data }) {
  // const data = React.useMemo(() => fakeData, []);
  console.log(data);
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
        Header : 'Donator image',
        accessor : "donator.image"
      },
      {
        Header: "Actions",
        accessor: "id", // Assuming you have a unique identifier like 'id' in your data
        Cell: () => (
          <div className="flex gap-3">
            <button className="btn">Update</button>
            <button className="btn">Delete</button>
            <button className="btn">Manage</button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="text-center flex justify-center h-screen my-10">
      <div className="overflow-auto rounded-lg">
        <table {...getTableProps()} className="lg:table-md table-zebra border-2">
          <thead className="bg-sky-700 text-white h-16">
            {headerGroups.map((headerGroup) => (
              <tr className="" key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="px-5" key={column.id} {...column.getHeaderProps()}>
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
                      {cell.column.id === "foodImage" || cell.column.id === 'donator.image' ? (
                        <div className="flex justify-center">
                          <img
                            src={cell.value}
                            alt="Image"
                            className="w-10 h-10"
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
      </div>
    </div>
  );
}

Table.propTypes = {
  data : PropTypes.array,
}

export default Table;
