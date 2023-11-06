import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    foodImage,
    foodName,
    donator,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
  } = food;
  return (
    <div className="my-20 flex items-center justify-around gap-10">
      <div>
        <img src={foodImage} alt="" className="rounded-lg md:w-[500px] md:h-auto" />
      </div>
      <div>
        <p className="font-bold text-2xl">{foodName}</p>
        <p>Quantity : {foodQuantity}</p>
        <p>{additionalNotes}</p>
        <p>Expire Date : {expiredDateTime}</p>
        <p>Food PickUp Address : {pickupLocation}</p>
        <p className="text-base font-bold">Donner information : </p>
        <div className="">
          <p>Donner Name : {donator.name}</p>
          <img
            src={donator.image}
            alt=""
            className=" mt-5 w-72 ring-sky-700 ring-2 outline-offset-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
