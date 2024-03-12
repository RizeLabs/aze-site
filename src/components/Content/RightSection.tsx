import PolygonIcon from "../../assets/polygon.svg";
import VectorIcon from "../../assets/vectorIcon.svg";

export const RightSection = () => {
  return (
    <>
      {/* Right section */}
      <div className="lg:h-[58%] lg:w-[33.5%] lg:absolute bg-transparent lg:top-[11.9%] right-0 @container my-8 lg:my-0">
        <div className="relative w-full h-full lg:clip-bottom-left overflow-hidden lg:bg-gradient-to-bl from-50% from-transparent to-[#E9EAEC]">
          <div className="lg:absolute right-0 top-0 w-[99.9%] h-[99.9%] lg:clip-bottom-left lg:overflow-hidden lg:bg-primary border-0">
            {/* Content */}
            <div className="flex flex-col items-center lg:items-start h-full justify-center gap-12 @xs:gap-14 lg:px-6 m-auto lg:m-auto max-w-sm @container">
              <div className="text-4xl @xs:text-5xl font-bold bg-gradient-to-r from-white from-50% to-gray-800 text-transparent bg-clip-text">
                In{" "}
                <span className="bg-text-pink-1 text-transparent">cards</span>{" "}
                we bluff, in code we{" "}
                <span className="bg-text-pink-3 text-transparent">trust</span>
              </div>

              <div className="h-[51px] clip-top-right-sm relative overflow-hidden bg-gradient-to-br from-[#FE00A8] to-[#5278FF]  flex px-3">
                <div className="absolute w-[98%] h-[93%] bottom-[1.5px] left-[2px] clip-top-right-sm bg-primary text-white"></div>
                <a
                  className="flex"
                  href="https://forms.gle/yoTFvLYT5C9AbAiw5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-bold text-xl relative bg-text-grey-1 flex gap-1.5 items-center cursor-pointer">
                    <span className="mr-1 bg-gradient-to-r from-white from-10% to-gray-600 text-transparent bg-clip-text">
                      Coming Soon
                    </span>
                    <img src={PolygonIcon} className={`h-[20px] rotate-180`} />
                    <img
                      src={VectorIcon}
                      className={`h-[18px] -translate-y-[0.7rem]`}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
