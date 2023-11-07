// import axios from "axios";
import Table from "../Components/Table/table";
import { useQuery } from "@tanstack/react-query";
const ManageFood = () => {
  const { data, isLoading, refetch} = useQuery({
    queryKey: ["foodRequested"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/foods`);
      return await data.json();
    },
  });

  // const ids = data.map(item => item._id);
  // console.log(ids)

  // const foodData = data.map(item => item._id)
  // console.log(foodData)

  // const deleteFood = () => {
  //   axios.delete(`http://localhost:5000/foods/${}`)
  //   .then(res => {
  //     console.log(res.data)
  //   })
  // }

  if (isLoading) {
    return (
      <div className="h-screen text-center flex justify-center items-center">
        <l-l-pulsar size="40" speed="1.75" color="black"></l-l-pulsar>
      </div>
    );
  }

  return (
    <div>
      <Table data={data} refetch={refetch}></Table>
    </div>
  );
};

export default ManageFood;
