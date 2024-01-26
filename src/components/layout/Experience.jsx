import { Button } from "../ui/Button";
import { UpworkContainer } from "../ui/UpworkContainer";
export const Experience = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 gap-10    py-[96px] px-[80px]  max-w-[1440px] max-md:px-[16px]  max-md:w-full max-lg:px-[16px]  dark:bg-gray-900">
      <div className="flex flex-col items-center gap-5">
        <button className="rounded-xl bg-gray-200 py-[3px] px-[20px] text-gray-600 dark:bg-gray-700 dark:text-gray-200">
          Experience
        </button>

        <p className="text-gray-600 max-md:text-center dark:text-white">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <UpworkContainer />
      <UpworkContainer />
      <UpworkContainer />
    </div>
  );
};
