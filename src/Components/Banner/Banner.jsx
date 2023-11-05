const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10 items-center justify-between ">
      <div className="md:w-[50%]">
        <div className="mb-3">
          <p className="text-6xl font-black text-sky-700">
            Share the Bounty, Reduce the Waste
          </p>
          <p>
            Welcome to a World of Abundance, Where Surplus Becomes
            Sustenance.Discover a Community-Driven Platform Dedicated to
            Reducing Food Waste, Sharing Resources,and Nourishing Lives.
            Together, We Can Make a Difference, One Meal at a Time
          </p>
        </div>
        <div className="form-control ">
          <div className="relative lg:w-1/2">
            <input
              name="name"
              placeholder="Search Food"
              className="input input-bordered rounded-full w-full "
              required
            />
            <span className="absolute right-0 top-0">
              <button
                type="submit"
                className="p-3 bg-sky-700 rounded-full text-white "
              >
                Search
              </button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-[800px]"
          src="https://i.ibb.co/0Jh3cS2/banner-Food.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
