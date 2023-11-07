import { Helmet } from "react-helmet";
import UseAuth from "../Hooks/UseAuth";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

const AddFoods = () => {
    const [status, setStatus] = useState('pending')
  const { user,  } = UseAuth();

  const addFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodQuantity = form.foodQuantity.value;
    const foodImage = form.foodImage.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;
    const additionalNotes= form.additionalNotes.value;
    const donarImage = user.photoURL;
    const donarName = user.displayName;
    const donarEmail = user.email;
    setStatus('pending')
    
    const foodInfo = {
        foodName,
        status,
        foodQuantity,
        expireDate,
        foodImage,
        pickupLocation,
        additionalNotes,
        donator :{
            image : donarImage,
            name : donarName,
            email : donarEmail
        }

    }

    console.log(foodInfo)

    axios.post('http://localhost:5000/foods', foodInfo)
    .then(res => {
        console.log(res.data)
    })
    .then(err => {
        console.log(err)
    })

    form.reset()
  }
  return (
    <div>
      <Helmet>
        <title>FeedX | add food</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen ">
          <div className="text-center">
            <div className=" w-full pb-4 shadow-2xl">
              <form onSubmit={addFood} className="card-body ">
                <div className="flex justify-center items-center gap-3">
                  <div>
                    <p className="text-2xl font-bold text-sky-700">Add Food</p>
                  </div>
                  <div>
                    <BsDatabaseFillAdd className="text-2xl text-sky-700"></BsDatabaseFillAdd>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">FoodName</span>
                    </label>
                    <input
                      type="text"
                      name="foodName"
                      placeholder="Food name"
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
                      placeholder="Food image url"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Food Quantity</span>
                    </label>
                    <input
                      name="foodQuantity"
                      type="number"
                      min={1}
                      placeholder="Food quantity"
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
                      placeholder="Food pickup location"
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
                    placeholder="Expire date"
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
                <div className="flex gap-5">
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
                    placeholder="Additional notes"
                    className="input input-bordered py-3"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="p-3 rounded-lg bg-sky-700 text-white">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoods;
