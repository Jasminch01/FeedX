import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import { MdManageHistory } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UpdateFood = () => {
  const [status, setStatus] = useState("pending");
  const { user } = UseAuth();
  const goTo = useNavigate()
  const food = useLoaderData();
  const {
    _id,
    foodImage,
    foodName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
  } = food;

  const updateFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodQuantity = form.foodQuantity.value;
    const foodImage = form.foodImage.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;
    const additionalNotes = form.additionalNotes.value;
    const donarImage = user.photoURL;
    const donarName = user.displayName;
    const donarEmail = user.email;
    setStatus("pending");

    const foodInfo = {
      foodName,
      status,
      foodQuantity,
      expireDate,
      foodImage,
      pickupLocation,
      additionalNotes,
      donator: {
        image: donarImage,
        name: donarName,
        email: donarEmail,
      },
    };
    const res = await axios.put(
      `http://localhost:5000/manage/${_id}`,
      foodInfo
    );
    const data = await res.data;
    if (data.modifiedCount > 0) {
      toast.success('updated Successfully')
      goTo('/manage-food')
    }

    form.reset();
  };
  return (
    <div>
      <Helmet>
        <title>FeedX | Update Food </title>
      </Helmet>
      <div>
        <div>
          <div className="hero min-h-screen ">
            <div className="text-center">
              <div className=" w-full pb-4 shadow-2xl">
                <form onSubmit={updateFood} className="md:card-body p-4 ">
                  <div className="flex justify-center items-center gap-3">
                    <div>
                      <p className="text-2xl font-bold text-sky-700">
                        Update Food
                      </p>
                    </div>
                    <div>
                      <MdManageHistory className="text-2xl text-sky-700"></MdManageHistory>
                    </div>
                  </div>
                  <div className="md:flex gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">FoodName</span>
                      </label>
                      <input
                        type="text"
                        name="foodName"
                        defaultValue={foodName}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control relative">
                      <label className="label">
                        <span className="label-text">Food Image</span>
                      </label>
                      <input
                        name="foodImage"
                        defaultValue={foodImage}
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Food Quantity</span>
                      </label>
                      <input
                        name="foodQuantity"
                        type="number"
                        min={1}
                        defaultValue={foodQuantity}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">pickup Location</span>
                      </label>
                      <input
                        name="pickupLocation"
                        type="text"
                        defaultValue={pickupLocation}
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Expire date</span>
                    </label>
                    <input
                      name="expireDate"
                      type="date"
                      defaultValue={expiredDateTime}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Donator name</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user.displayName}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                  <div className="md:flex gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Donator email</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={user.email}
                        className="input input-bordered"
                        readOnly
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Donator image url</span>
                      </label>
                      <input
                        defaultValue={user.photoURL}
                        className="input input-bordered"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Additional notes</span>
                    </label>
                    <textarea
                      rows={20}
                      name="additionalNotes"
                      type="text"
                      defaultValue={additionalNotes}
                      className="input input-bordered py-3"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="p-3 rounded-lg bg-sky-700 text-white">
                      Update
                    </button>
                  </div>
                </form>
              </div>
              <Toaster></Toaster>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
