import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

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
    <div className="my-20 md:flex items-center justify-around gap-10">
      <div>
        <img
          src={foodImage}
          alt=""
          className="rounded-lg md:w-[500px] md:h-auto"
        />
      </div>
      <div>
        <p className="font-bold text-2xl">{foodName}</p>
        <p>{additionalNotes}</p>
        <p>Quantity : {foodQuantity}</p>
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
        <div className="mt-10">
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="bg-sky-700 text-white p-2"
          >
            Request for pickup
          </button>
          <Modal food = {food}></Modal>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
