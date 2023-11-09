import { Helmet } from "react-helmet";
import RequestFood from "../Components/RequestFood/RequestFood";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseAuth";

const MyFoodRequest = () => {
  const {user} = UseAuth()
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["foodRequested"],
    queryFn: async () => {
      const data = await fetch(`https://feed-x-server.vercel.app/requested-foods?email=${user.email} `, {credentials : "include"});
      return await data.json();
    },
  });

  const cencelRequest = async (_id) => {
    try {
      await axios
        .delete(`https://feed-x-server.vercel.app/requested-foods/${_id}`,{withCredential : true})
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          toast.success('Successfully Cancelled Request')
        }
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen text-center flex justify-center items-center">
        <l-pulsar size="40" speed="1.75" color="black"></l-pulsar>
      </div>
    );
  }

  return (
    <div className="my-20">
      <Helmet>
        <title>FeedX : My food request</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((food) => (
          <RequestFood
            key={food._id}
            food={food}
            cencelRequest={cencelRequest}
            data={data}
          ></RequestFood>
        ))}
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default MyFoodRequest;
