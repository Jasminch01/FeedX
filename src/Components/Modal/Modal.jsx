import moment from "moment/moment";
import UseAuth from "../../Hooks/UseAuth";
import PropsTypes from "prop-types";
import axios from "axios";
import toast, {  Toaster } from "react-hot-toast";

const Modal = ({ food }) => {
  const { user } = UseAuth();
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
  const currentTime = moment().format(`h:mm A`);

  const requestHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const donationMoney = form.donation.value;
    const reqestData = {
      foodImage,
      foodName,
      donatorName: donator.name,
      donatorImage: donator.image,
      currentTime,
      pickupLocation,
      expiredDateTime,
      additionalNotes,
      donationMoney,
      requestorName : user.displayName,
      requstorEmail : user.email,
      status
    };

    try {
      await axios
        .post("http://localhost:5000/requested-foods", reqestData)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success(' Request Successfull')
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          <div className="w-full">
            <form onSubmit={requestHandler} className="card-body">
              <p className="font-bold text-xl text-center">{foodName}</p>
              <div className="flex justify-center">
                <img src={foodImage} alt="" className="w-60 h-60 rounded" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Id</span>
                </label>
                <input
                  type="text"
                  name="foodId"
                  defaultValue={_id}
                  placeholder="Full Name"
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  placeholder="Full Name"
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your email</span>
                </label>
                <input
                  type="email"
                  name="your email"
                  defaultValue={user.email}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donator Name</span>
                </label>
                <input
                  name="donator"
                  defaultValue={donator.name}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Request Time</span>
                </label>
                <input
                  type="text"
                  name="time"
                  defaultValue={currentTime}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Pickup Location</span>
                </label>
                <input
                  type="text"
                  name="pickuplocation"
                  defaultValue={pickupLocation}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Expire Date</span>
                </label>
                <input
                  type="text"
                  name="expiredate"
                  defaultValue={expiredDateTime}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Donation money</span>
                </label>
                <input
                  type="number"
                  name="donation"
                  placeholder="$ Donation"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Additional Notes</span>
                </label>
                <textarea
                  type="number"
                  name="additionalNotes"
                  defaultValue={additionalNotes}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="p-3 bg-sky-700 rounded-lg text-white">
                  Request
                </button>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn"> close </button>
              </form>
            </div>
          </div>
        </div>
        <Toaster></Toaster>
      </dialog>
    </div>
  );
};

Modal.propTypes = {
  food: PropsTypes.object,
};

export default Modal;
