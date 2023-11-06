import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import FeatureFood from "../Components/FeatureFood.jsx/FeatureFood";
import { useState } from "react";
import { PiSortDescendingDuotone } from "react-icons/pi";

const AvilableFoods = () => {
  const [name, setName] = useState();
  const lodedFoods = useLoaderData();
  const [foods, setFoods] = useState(lodedFoods);

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(name);
    const filter = foods.filter((food) =>
      food.foodName.toLowerCase().includes(name)
    );
    setFoods(filter);
  };
  return (
    <div>
      <Helmet>
        <title>FeedX | Avilable Foods</title>
      </Helmet>
      <div className="my-10 text-center flex justify-center">
        <form onSubmit={searchHandler} className="form-control relative">
          <input
            onChange={(e) => setName(e.target.value.toLocaleLowerCase())}
            type="text"
            name="name"
            placeholder="Search Food"
            id=""
            className="input input-bordered rounded-full w-96"
          />
          <span className="absolute right-0 top-0">
            <button
              className="p-3 bg-sky-700 rounded-full text-white "
              type="submit"
            >
              Search
            </button>
          </span>
        </form>
      </div>
      <div className="my-20">
        <p className="my-5 font-bold text-center text-3xl">Avilable Foods</p>
        <div className="flex justify-end mb-5">
          <div className="flex cursor-pointer">
            <button>sort by expire date</button>
            <PiSortDescendingDuotone className="text-2xl"></PiSortDescendingDuotone>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {foods.map((food) => (
            <FeatureFood key={food._id} food={food}></FeatureFood>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvilableFoods;
