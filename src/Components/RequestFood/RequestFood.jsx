import PropTypes from "prop-types";

import { RiDeleteBin6Fill } from "react-icons/ri";
const RequestFood = ({ food, cencelRequest, data }) => {
  const {
    _id,
    foodImage,
    foodName,
    donatorName,
    expiredDateTime,
    pickupLocation,
    currentTime,
    donationMoney,
    status,
  } = food;

  console.log(data)

  return (
    <div>
      {data.length < 0 ? (
        <div className="flex justify-center">
          <div>
            <p>No data</p>
            <img src="https://i.ibb.co/sPs7c3b/5928292-3024051.jpg" alt="" />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-5 ">
          <div>
            <img src={foodImage} alt="" className="w-60 h-60 rounded" />
          </div>
          <div>
            <p>FoodName : {foodName}</p>
            <p>Donner : {donatorName}</p>
            <p>Expite Date : {expiredDateTime}</p>
            <p>Pickup Location : {pickupLocation}</p>
            <p>Request Time : {currentTime}</p>
            <p>
              Donated Amount : {donationMoney ? donationMoney : "not donated"}
            </p>
            <p className="text-red-400">Status : {status}</p>
          </div>
          <div>
            <button onClick={()=> cencelRequest(_id)}
              className="text-white p-2 rounded bg-slate-200"
            >
              <RiDeleteBin6Fill className="text-red-400 text-xl"></RiDeleteBin6Fill>{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
RequestFood.propTypes = {
  food: PropTypes.object,
  cencelRequest: PropTypes.func,
  data : PropTypes.array,
};
export default RequestFood;
