import PropTypes from 'prop-types'
const FeatureFood = ({ food }) => {
  const {
    _id,
    foodImage,
    foodName,
    donator,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
  } = food;
  return (
    <div className="flex gap-5 items-center shadow-lg">
      <div>
        <img src={foodImage} alt="" className="w-60 h-60 rounded-md" />
      </div>
      <div>
        <p className="text-xl font-bold">{foodName}</p>
        <p>{additionalNotes}</p>
        <p>Quantity : {foodQuantity}</p>
        <p>Expire Date & Time : {expiredDateTime}</p>
        <p>PickUp Address : {pickupLocation}</p>
        <div className="flex  items-center gap-3">
            <p>Donner : {donator.name}</p>
            <img src={donator.image} alt="" className="w-10 rounded-full ring-sky-700 ring-2 outline-offset-1" />
        </div>
      </div>
    </div>
  );
};

FeatureFood.propTypes = {
    food : PropTypes.object, 
}

export default FeatureFood;
