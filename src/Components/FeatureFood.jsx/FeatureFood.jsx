import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const FeatureFood = ({ food }) => {
  const {
    _id,
    foodImage,
    foodName,
    donator,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
  } = food;
  return (
    <div className="md:flex gap-5 items-center shadow-lg p-5 md:p-0">
      <div>
        <img src={foodImage} alt="" className="md:w-60 md:h-60 rounded-md" />
      </div>
      <div>
        <p className="text-xl font-bold">{foodName}</p>
        <p>Quantity : {foodQuantity}</p>
        <p>Expire Date: {expiredDateTime}</p>
        <p>PickUp Address : {pickupLocation}</p>
        <div className="flex  items-center gap-3">
            <p>Donner : {donator?.name}</p>
            <img src={donator?.image} alt="" className="w-10 rounded-full ring-sky-700 ring-2 outline-offset-1" />
        </div>
        <div>
          <Link to={`/Food-details/${_id}`}>
          <button className='p-3 bg-sky-500 text-white'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

FeatureFood.propTypes = {
    food : PropTypes.object, 
}

export default FeatureFood;
