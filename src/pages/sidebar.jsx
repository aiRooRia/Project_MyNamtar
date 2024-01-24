export const sidebar = () => {
  let showMenu = false;
  const toggleMenu = () => {
    showMenu = false;
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-end">
      <div className="bg-white w-[70%] h-full "></div>
    </div>
  );
};
