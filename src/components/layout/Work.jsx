import { Button } from "../ui/Button";
import { WorkContainer, WorkContainerReverse } from "../ui/WorkContainer";
export const Work = () => {
  return (
    <div className="flex flex-col items-center gap-10    py-[96px] px-[80px]  max-w-[1440px] max-md:px-[16px] max-lg:px-[16px]">
      <div className="flex flex-col items-center gap-5">
        <Button />
        <p className="text-gray-600 ">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <WorkContainer />
      <WorkContainerReverse />
      <WorkContainer />
    </div>
  );
};
