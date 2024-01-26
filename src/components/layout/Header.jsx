import { useState, useEffect } from "react";
import useDownloader from "react-use-downloader";

export const Header = ({
  aboutHandleClick,
  workHandleClick,
  contactHandleClick,
}) => {
  const [showMenu, setShowMEnu] = useState(false);
  const toggleMenu = () => {
    setShowMEnu(!showMenu);
  };
  const { download } = useDownloader();
  const handleDownload = () => {
    const fileUrl =
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg";
    const filename = "beautiful-carpathia.jpg";
    download(fileUrl, filename);
  };
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
    localStorage.setItem("hello", "leap");
  }, [isDarkMode]);

  return (
    <div className="flex justify-between items-center sm:max-w-[1440px] sm:min-w-full lg:py-[96px] lg:px-[80px] py-[16px] px-[16px]  ">
      <div className="">
        <h1 className="font-bold text-3xl">aiRo!</h1>
      </div>
      <div className="flex items-center gap-5 max-md:hidden ">
        <ul className="flex justify-between items-center gap-5">
          <li>
            <button onClick={aboutHandleClick}>About</button>
          </li>
          <li>
            <button onClick={workHandleClick}>Work</button>
          </li>
          <li>Testimonials</li>
          <li>
            <button onClick={contactHandleClick}>Contact</button>
          </li>
        </ul>
        <img
          onClick={() => setDarkMode((prevState) => !prevState)}
          src={isDarkMode ? "moon.svg" : "light.svg"}
          alt=""
          width={30}
        />
        <button
          onClick={handleDownload}
          className="py-1.5 px-4 bg-black rounded-lg text-white dark:bg-gray-100 dark:text-black"
        >
          Download CV
        </button>
      </div>
      {/* <div className="hidden max-md:flex">
        <img onClick={toggleMenu} src="icon-more.svg" alt="" />
      </div>
      <div
        onClick={toggleMenu}
        className="absolute top-0 left-0 w-screen h-full bg-black bg-opacity-70 flex justify-end"
      ></div>
      {showMenu && (
        <div className="bg-white w-[70%] h-full absolute top-0 right-0 ">
          <div className="flex justify-between py-2 px-2 border-b-2">
            <h1 className="font-bold text-xl">aiRo!</h1>
            <button
              onClick={toggleMenu}
              className="p-1 border-solid border-2 border-black rounded-full  "
            >
              X
            </button>
          </div>
          <div className="text-gray-600 py-2 px-2 border-b-2">
            <p>About</p>
            <p>Work</p>
            <p>Testi</p>
            <p>Contact</p>
          </div>
          <div className="py-2 px-2 flex justify-between text-gray-600">
            <p>Switch Theme</p>
            <img src="light.svg" width={30} alt="" />
          </div>
          <div className="py-2 px-2 ">
            <button className="w-full rounded-xl bg-black py-[3px] px-[20px] text-white">
              Download CV
            </button>
          </div>
        </div>
      )}{" "} */}
    </div>
  );
};
