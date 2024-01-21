import { Button } from "../ui/Button";
import { UpworkContainer } from "../ui/UpworkContainer";
export const Experience = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 gap-10    py-[96px] px-[80px]  max-w-[1440px] max-md:px-[16px]  max-md:w-full max-lg:px-[16px]">
      <div className="flex flex-col items-center gap-5">
        <Button />
        <p className="text-gray-600 max-md:text-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <UpworkContainer />
      <UpworkContainer />
      <UpworkContainer />
    </div>
  );
};
