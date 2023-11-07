import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../Components/Table/table";
const ManageFood = () => {
  const [data, setData]= useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:5000/foods`)
    .then(res => {
      setData(res.data)
    })
    .then(err => {
      console.log(err)
    })
  },[])


  return (
    <div>
      <Table data={data}></Table>
    </div>
  );
};

export default ManageFood;