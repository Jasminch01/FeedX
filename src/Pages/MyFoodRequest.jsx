import { Helmet } from "react-helmet";
import RequestFood from "../Components/RequestFood/RequestFood";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const MyFoodRequest = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["foodRequested"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/requested-foods`);
      return await data.json();
    },
  });
  console.log(data);

  const cencelRequest = async (_id) => {
    try {
      await axios
        .delete(`http://localhost:5000/requested-foods/${_id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            toast.success("successfully remove form request");
            refetch();
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
          ></RequestFood>
        ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;
