import { Button } from "../ui/Button";
import { WorkContainer, WorkContainerReverse } from "../ui/WorkContainer";

export const Work = ({ workRef }) => {
  return (
    <div
      ref={workRef}
      className="flex flex-col items-center gap-10    py-[96px] px-[80px]  max-w-[1440px] max-md:px-[16px] max-lg:px-[16px]"
    >
      <div className="flex flex-col items-center gap-5">
        <button className="rounded-xl bg-gray-200 py-[3px] px-[20px] text-gray-600 dark:text-white dark:bg-gray-700">
          Work
        </button>

        <p className="text-gray-600 dark:text-white">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <WorkContainer />
      <WorkContainerReverse />
      <WorkContainer />
    </div>
  );
};
