export const Footer = ({ contactRef }) => {
  return (
    <div
      ref={contactRef}
      className="flex justify-center bg-gray-50 gap-10     py-[24px] max-w-[1440px] max-md:px-[16px] max-md:gap-[8px]"
    >
      <img src="icon-c.svg" alt="" />
      <p className="max-md:text-sm">
        2023 | Designed and coded with ❤️️ by Ariguun Bold
      </p>
    </div>
  );
};
