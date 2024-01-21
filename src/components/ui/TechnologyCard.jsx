export const Cards = () => {
  const cards = [
    {
      img: "icon-typescript.svg",
      text: "Typescript",
    },
    {
      img: "icon-tailwindcss.svg",
      text: "Typescript",
    },
    {
      img: "icon-storybook.svg",
      text: "Typescript",
    },
    {
      img: "icon-socket.svg",
      text: "Typescript",
    },
    {
      img: "icon-sass.svg",
      text: "Typescript",
    },
    {
      img: "icon-react.svg",
      text: "Typescript",
    },
    {
      img: "icon-postgresql.svg",
      text: "Typescript",
    },
    {
      img: "icon-nodejs.svg",
      text: "Typescript",
    },
    {
      img: "icon-nextjs.svg",
      text: "Typescript",
    },
    {
      img: "icon-nest.svg",
      text: "Typescript",
    },
    {
      img: "icon-mongodb.svg",
      text: "Typescript",
    },
    {
      img: "icon-javscript.svg",
      text: "Typescript",
    },
    {
      img: "icon-git.svg",
      text: "Typescript",
    },
    {
      img: "icon-figma.svg",
      text: "Typescript",
    },
    {
      img: "icon-express.svg",
      text: "Typescript",
    },
    {
      img: "icon-cypress.svg",
      text: "Typescript",
    },
  ];
  return (
    <>
      {cards.map((el) => (
        <div className="flex flex-col items-center justify-between ">
          <img src={el.img} alt="" width={120} className="max-md:w-[60px] " />
          <p className="text-gray-600">{el.text}</p>
        </div>
      ))}
    </>
  );
};
