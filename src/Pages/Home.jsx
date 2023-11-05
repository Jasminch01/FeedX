import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import FeatureFood from "../Components/FeatureFood.jsx/FeatureFood";

const Home = () => {
  const foods = useLoaderData();
  console.log(foods);
  return (
    <div>
      <Helmet>
        <title>
          FeedX | A Community Food Sharing and Surplus Reduction Platform
        </title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div className="my-20">
        <p className="my-5 font-bold text-center text-3xl">Featured Foods</p>
        <div className="grid grid-cols-2 gap-5">
          {foods.map((food) => (
            <FeatureFood key={food._id} food={food}></FeatureFood>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to={'avilable-foods'}>
            <button className="p-3 bg-sky-700 text-white">See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
