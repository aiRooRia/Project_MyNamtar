export const UpworkContainer = () => {
  return (
    <div className="flex rounded-xl p-25 bg-white p-10 gap-40 shadow-xl  max-md:flex-col max-md:gap-[16px] max-md:p-[32px] max-md:justify-center dark:bg-gray-800">
      <div>
        <img src="logo-upwork.svg" alt="" />
      </div>
      <div className="flex flex-col gap-5 text-gray-600 dark:bg-gray-800 dark:text-white">
        <p>Sr. Frontend Developer</p>

        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
        <li>Sed quis justo ac magna.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </div>
      <div className="text-gray-600 dark:text-white">
        <p>Nov 2021 - Present</p>
      </div>
    </div>
  );
};
