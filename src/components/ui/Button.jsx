export const Button = () => {
  const buttons = [
    {
      aboutUs: "About Us",
      skills: "Skills",
      experience: "Experience",
      work: "Work",
      GetInTouch: "Get in touch",
    },
  ];
  return (
    <>
      {buttons.map((el) => (
        <button className="rounded-xl bg-gray-200 py-[3px] px-[20px] text-gray-600">About</button>
      ))}
    </>
  );
};
