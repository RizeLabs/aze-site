import AZELogo from "../../assets/AzeLogo.svg";

export const Header = ({isSidebarOpen, setSidebarToggle}: {isSidebarOpen: boolean, setSidebarToggle: (val: boolean) => void}) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Header Box */}
      <div className="h-full w-full absolute bg-transparent top-0 left-0 flex">
        <div className="relative w-full h-[99%] text-center overflow-hidden bg-gradient-to-r from-transparent via-[#E9EAEC] to-transparent">
          {/* Layout */}
          <div className="absolute left-0 top-0 w-full h-[99%] overflow-hidden flex bg-primary border-0">
            {/* Header Left Box */}
            <div className="hidden lg:block w-[75%] h-full relative bg-gradient-to-b from-transparent via-[#E9EAEC] to-transparent">
              <div className="absolute left-0 top-0 w-[99.84%] h-full overflow-hidden bg-primary border-0">
                {/* Content */}
              </div>
            </div>
            {/* Header Right Box */}
            <div className="bg-primary w-[25%] h-full">{/* Content */}</div>
          </div>

          {/* Content */}
          <div className="flex absolute h-full w-full items-center font-bold text-xl lg:justify-around">
            <div className="lg:w-[17%] w-full font-[1000px] text-3xl z-[100]">
            <span className="cursor-pointer flex justify-center">
              <img alt="AZE Logo" className="lg:w-[8rem] w-[6rem]" src={AZELogo} />
            </span>
            </div>
            <div className="hidden lg:flex w-[58%] justify-center gap-x-14">
              <div className="text-gray-300 font-bold cursor-pointer">Home</div>
              <a href="https://twitter.com/Aze_Cards"
                  target="_blank"
                  rel="noopener noreferrer"><span className="text-gray-300 font-bold">Blogs</span></a>
            </div>
            <div className="lg:w-[25%] w-full bg-gradient-to-r from-white from-20% to-gray-800 text-transparent bg-clip-text">
              <a href="https://twitter.com/Aze_Cards"
                  target="_blank"
                  rel="noopener noreferrer"><span className="text-transparent font-bold">Contact us</span></a>
              
            </div>
            <div className="lg:hidden w-full cursor-pointer flex justify-center">
              <button
                aria-label="Open Menu"
                className="relative group w-9 h-3 z-[100] lg:hidden p-1.5 border-0"
                style={{ outline: "none", appearance: "none" }}
                onClick={() => setSidebarToggle(!isSidebarOpen)}
              >
                <i
                  className={`w-full h-1 absolute left-0  gradient-1 transition-all duration-300 ease-out z-[100] top-2 ${
                    isSidebarOpen
                      ? "rotate-[30deg] translate-y-[-4px]"
                      : "group-hover:translate-y-0.5"
                  }`}
                ></i>
                <i
                  className={`w-full h-1 absolute left-0 gradient-1 transition-all duration-300 ease-out z-[100] bottom-2 ${
                    isSidebarOpen
                      ? "rotate-[-30deg] translate-y-[4px]"
                      : "group-hover:-translate-y-0.5"
                  }`}
                ></i>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
