import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import FeatureFood from "../Components/FeatureFood.jsx/FeatureFood";
import { BiSolidDonateHeart, BiShareAlt } from "react-icons/bi";
import { PiChartLineDownLight } from "react-icons/pi";
import { CgUserAdd } from "react-icons/cg";

const Home = () => {
  const foods = useLoaderData();
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {foods.map((food) => (
            <FeatureFood key={food._id} food={food}></FeatureFood>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to={"avilable-foods"}>
            <button className="p-3 bg-sky-700 text-white">See more</button>
          </Link>
        </div>
      </div>
      <div className="mb-10 md:p-10 bg-sky-50 rounded-lg">
        <p className="font-bold text-3xl text-center mb-5">
          How {"it's "} Work
        </p>
        <div className="container mx-auto lg:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex flex-col md:p-5 p-3 bg-white">
            <div className="flex justify-center">
              <BiSolidDonateHeart className="text-4xl"></BiSolidDonateHeart>
            </div>
            <h2 className=" font-bold text-2xl text-center">Food Donations</h2>
            <div className="flex flex-wrap mt-auto ">
              <p className="text-md text-justify">
                Access food effortlessly. Register, browse donations, and
                connect with donors seamlessly. We bridge the gap between those
                in need and generous contributors.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col md:p-5 p-3 bg-white">
            <div className="flex justify-center">
              <BiShareAlt className="text-4xl"></BiShareAlt>
            </div>
            <h2 className=" font-bold text-2xl text-center">Food Sharing</h2>
            <div className="flex flex-wrap mt-auto ">
              <p className="text-md text-justify">
                Access food effortlessly. Register, browse donations, and
                connect with donors seamlessly. We bridge the gap between those
                in need and generous contributors.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col md:p-5 p-3 bg-white">
            <div className="flex justify-center">
              <PiChartLineDownLight className="text-4xl"></PiChartLineDownLight>
            </div>
            <h2 className=" font-bold text-2xl text-center">
              Reducing Food Waste
            </h2>
            <div className="flex flex-wrap mt-auto ">
              <p className="text-md text-justify">
                {"We're"}committed to minimizing food waste. By sharing surplus
                food, we divert it from landfills, creating a more eco-friendly
                and sustainable community.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col md:p-5 p-3 bg-white">
            <div className="flex justify-center p-3">
              <CgUserAdd className="text-4xl "></CgUserAdd>
            </div>
            <h2 className=" font-bold text-2xl text-center">Get Involved</h2>
            <div className="flex flex-wrap mt-auto ">
              <p className="text-md text-justify">
                Join our mission to reduce food waste and address food
                insecurity. Contribute by donating, volunteering, or sharing.
                Every action matters in our compassionate community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row flex-col justify-center items-center gap-10 mb-10">
        <div>
          <img
            src="https://i.ibb.co/C6HDhS7/pexels-valeria-boltneva-15913452.jpg"
            alt=""
            className="h-[600px]"
          />
        </div>
        <div>
          <p className="text-bold text-4xl">
            Donate Your <br />
            Excess Meals
          </p>
          <p className="md:text-justify text-center">
            Every meal you share can make a difference. <br /> Contribute to our
            mission of reducing food waste and helping those  in need. <br /> Donate
            your extra food and be a part of our compassionate community. <br />Join with Us by donating your surplus food, you help reduce waste and feed those in need.  <br />Be a part of our compassionate mission today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
