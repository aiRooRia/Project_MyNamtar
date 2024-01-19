export const Header = () => {
  return (
    <div className=" flex justify-between max-w-[1440px] max-md:w-full py-[96px] px-[80px]  max-md:p-[16px] max-lg:px-[16px]">
      <h1 className="font-bold text-3xl">aiRo!</h1>
      <div className="flex items-center gap-5 max-md:hidden">
        <ul className="flex gap-5">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <img src="light.svg" alt="" width={30} />
        <button className="py-1.5 px-4 bg-black rounded-lg text-white">
          Download CV
        </button>
      </div>
      <div className="hidden max-md:flex">
        <img src="icon-more.svg" alt="" />
      </div>
    </div>
  );
};
