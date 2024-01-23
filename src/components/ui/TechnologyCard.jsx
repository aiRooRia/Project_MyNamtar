export const Cards = () => {
  const cards = [
    {
      img: "icon-typescript.svg",
      text: "Typescript",
    },
    {
      img: "icon-tailwindcss.svg",
      text: "Tailwindcss",
    },
    {
      img: "icon-storybook.svg",
      text: "Storybook",
    },
    {
      img: "icon-socket.svg",
      text: "Socket",
    },
    {
      img: "icon-sass.svg",
      text: "Sass",
    },
    {
      img: "icon-react.svg",
      text: "React",
    },
    {
      img: "icon-postgresql.svg",
      text: "Postgresql",
    },
    {
      img: "icon-nodejs.svg",
      text: "Nodejs",
    },
    {
      img: "icon-nextjs.svg",
      text: "Nextjs",
    },
    {
      img: "icon-nest.svg",
      text: "Nest",
    },
    // {
    //   img: "icon-mongodb.svg",
    //   text: "MongoDB",
    // },
    {
      img: "icon-javscript.svg",
      text: "Javascript",
    },
    {
      img: "icon-git.svg",
      text: "Git",
    },
    // {
    //   img: "icon-figma.svg",
    //   text: "Figma",
    // },
    {
      img: "icon-express.svg",
      text: "Express",
    },
    {
      img: "icon-cypress.svg",
      text: "Cypress",
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
