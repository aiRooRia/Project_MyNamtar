import { Button } from "../ui/Button";
export const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-[96px] px-[80px] text-gray-600 max-w-[1440px] max-md:px-[16px]">
      <div className="flex flex-col items-center gap-3">
        <button className="rounded-xl bg-gray-200 py-[3px] px-[20px] text-gray-600">
          Get in touch
        </button>

        <p className="max-md:text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-3">
          <img src="icon-email.svg" alt="" />
          <p className="text-3xl font-bold mb-3 text-black max-md:text-base">
            ariguun10@gmail.com
          </p>
          <img src="icon-copy.svg" alt="" />
        </div>
        <div className="flex gap-3">
          <img src="icon-phone.svg" alt="" />
          <p className="text-3xl font-bold mb-3 text-black max-md:text-base">
            +91 88818657
          </p>
          <img src="icon-copy.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>You may also find me on these platforms!</p>
        <div className="flex justify-center gap-3">
          <img src="twitter.svg" alt="" />
          <img src="cat.svg" alt="" />
          <img src="bee.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
