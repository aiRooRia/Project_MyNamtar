import { Button } from "../ui/Button";
export const WorkContainer = () => {
  return (
    <div className="flex  rounded-xl shadow-xl text-gray-600 dark:text-white max-md:flex-col">
      <div className="p-20 w-[50%]  bg-gray-50 max-md:p-[32px] max-md:w-full max-lg:px-[16px] max-md:flex max-md:justify-center  dark:bg-gray-600">
        <img src="Picture.png" alt="" />
      </div>
      <div className="flex flex-col gap-10 p-20 w-[50%] max-md:w-full max-md:p-[32px] max-lg:px-[16px] dark:bg-gray-800">
        <h1>Fiskil</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <img src="icon-edit.svg" width={30} alt="" />
      </div>
    </div>
  );
};
export const WorkContainerReverse = () => {
  return (
    <div className="flex  rounded-xl shadow-xl text-gray-600 max-md:flex-col dark:text-white">
      <div className="flex flex-col gap-10 p-20 w-[50%] max-md:w-full max-md:p-[32px] max-lg:px-[16px]  dark:bg-gray-800 ">
        <h1>Fiskil</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <img src="icon-edit.svg" width={30} alt="" />
      </div>
      <div className="p-20 w-[50%]  bg-gray-50 max-md:p-[32px] max-md:w-full  max-md:flex max-md:justify-center  dark:bg-gray-600">
        <img src="Picture.png" alt="" />
      </div>
    </div>
  );
};
