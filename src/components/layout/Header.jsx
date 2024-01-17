export const Header = () => {
  return (
    <div className="flex justify-between w-[1440px] h-fit py-[16px] px-[80px] ">
      <h1 className="font-bold text-3xl">aiRo!</h1>
      <div className="flex items-center gap-5">
        <ul className="flex gap-5">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <img src="light.svg" alt="" width={30} />
        <button className="py-1.5 px-4 bg-black rounded-lg text-white">Download CV</button>
      </div>
    </div>
  );
};
