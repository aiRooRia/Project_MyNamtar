export const Profile = () => {
  return (
    <div className="flex max-w-[1440px] max-md:w-full py-[96px] px-[80px] max-md:flex-col max-md:px-[16px] max-md:py-[64px] max-lg:px-[16px]">
      <div className="flex flex-col  gap-20 w-[70%]  pr-20 max-md:w-full max-md:gap-[20px] max-md:pr-0">
        <div className="max-md:w-full">
          <h1 className="text-6xl font-bold mb-3 max-md:text-3xl flex gap-5">
            Hi, I`m Itachi
            <img className="w-14 max-md:w-10" src="sharingan.png" alt="" />
          </h1>

          <p className="text-gray-600 dark:text-white">
            I'm a full stack NINJA (React.js & Node.js) with a focus on creating
            (and occasionally designing) exceptional digital experiences that
            are fast, accessible, visually appealing, and responsive. Even
            though I have been creating web applications for over 7 years, I
            still love it as if it was something new.
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2">
            <img src="location.svg" alt="" />
            <p className="text-gray-600 dark:text-white">Utaanbaatar, Mongolia</p>
          </div>
          <div className="flex gap-2">
            <img src="dot.png" alt="" />
            <p className="text-gray-600 dark:text-white">Available for new task</p>
          </div>
        </div>
        <div className="flex gap-3 ">
          <img src="twitter.svg" alt="" />
          <img src="cat.svg" alt="" />
          <img src="bee.svg" alt="" />
        </div>
      </div>
      <div className="w-[30%]  border-grey max-md:w-full  max-md:flex max-md:justify-center ">
        <img
          className=" border-[15px] border-white "
          src="itachi.jpg"
          width={350}
          alt=""
        />
        {/* <div className="bg-gray-200 w-[370px] h-[300px] relative z-10 m-7"></div> */}
      </div>
    </div>
  );
};
