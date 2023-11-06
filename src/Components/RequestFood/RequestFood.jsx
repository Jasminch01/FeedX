import PropTypes from "prop-types";

import { RiDeleteBin6Fill } from "react-icons/ri";
const RequestFood = ({ food, cencelRequest }) => {
  const {
    _id,
    foodImage,
    foodName,
    donatorName,
    expiredDateTime,
    pickupLocation,
    currentTime,
    donationMoney,
  } = food;

  return (
    <div>
      {!RequestFood ? (
        <div className="flex justify-center items-center">
          <div>
            <img src="https://i.ibb.co/sPs7c3b/5928292-3024051.jpg" alt="" />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-5">
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
            <p>Status : </p>
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
};
export default RequestFood;
