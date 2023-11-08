import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const ManageSingleFood = () => {
    const food = useLoaderData()
    const {
        _id,
        foodImage,
        foodName,
        donator,
        pickupLocation,
        expiredDateTime,
        additionalNotes,
        status
      } = food;
    return (
        <div>
            <Helmet>
                <title>FeedX | Manage food</title>
            </Helmet>
            <div>
                <p>manage food</p>
                <p>{foodName}</p>
            </div>
        </div>
    );
};

export default ManageSingleFood;