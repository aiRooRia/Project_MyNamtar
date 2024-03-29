import { Button } from "../ui/Button";
import { Cards } from "../ui/TechnologyCard";
export const Skill = () => {
  return (
    <div className="flex flex-col items-center gap-10  py-[96px] px-[80px] max-w-[1440px] max-md:px-[16px]  max-md:w-full">
      <div className="flex flex-col items-center gap-5">
        <Button />
        <p className="text-gray-600 max-md:text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex flex-wrap gap-10">
        <Cards />
      </div>
    </div>
  );
};
