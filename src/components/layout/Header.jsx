import React from "react";
import { useRef } from "react";
import useDownloader from "react-use-downloader";
export const Header = ({ refProp }) => {
  const { download } = useDownloader();
  const handleDownload = () => {
    const fileUrl =
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg";
    const filename = "beautiful-carpathia.jpg";
    download(fileUrl, filename);
  };
  const ref = useRef(null);
  const handleClick = () => {
    refProp.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between max-w-[1440px] max-md:w-full py-[96px] px-[80px] max-md:p-[16px] max-lg:px-[16px]">
      <div>
        <h1 className="font-bold text-3xl">aiRo!</h1>
      </div>
      <div className="flex items-center gap-5 max-md:hidden">
        <ul className="flex justify-between items-center gap-5">
          <li>
            <button onClick={handleClick}>About</button>
          </li>
          <li>
            <button onClick={handleClick}>Work</button>
          </li>
          <li>Testimonials</li>
          <li>
            <button onClick={handleClick}>Contact</button>
          </li>
        </ul>
        <img src="light.svg" alt="" width={30} />
        <button
          onClick={handleDownload}
          className="py-1.5 px-4 bg-black rounded-lg text-white"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};
