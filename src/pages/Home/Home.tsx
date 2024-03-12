import { useEffect, useState } from "react";
import { Content, Footer, Header } from "../../components";
import { useNavigate } from "react-router-dom";
import PolygonIcon from "../../assets/polygon.svg";

export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <div className=" ">
      <div className={`absolute top-0 left-0  w-full h-[100px] @container ${isSidebarOpen ? "z-20" : "z-20"}`}>
        {/* Header */}
        <Header
          isSidebarOpen={isSidebarOpen}
          setSidebarToggle={setIsSidebarOpen}
        />
        <nav
          className={`absolute bg-primary top-0 left-0 h-[100vh] w-full z-[80] lg:hidden transition-all ease-in-out delay-500 duration-500 ${
            isSidebarOpen
              ? "lg:hidden  opacity-100"
              : "hidden  opacity-0"
          }`}
        >
          <div className="absolute z-40 top-0 left-0 lg:hidden w-full h-full bg-primary bg-[length:128px] pointer-events-none opacity-0"></div>
          <div className="fixed z-40 top-0 left-0 w-full lg:hidden h-full bg-noise bg-transparent bg-[length:100px] pointer-events-none"></div>
          <ul className="mt-28 relative z-[9999]">
            <li
              className="cursor-pointer"
              onClick={navigateToHome}
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: "1",
                transform: "translate(0px, 0px)",
              }}
            >
              <div
                className={`relative w-full h-full py-12 px-12 text-center overflow-hidden bg-gradient-to-r from-transparent via-[#E9EAEC] to-transparent`}
              >
                {/* Layout */}
                <div
                  className={`absolute left-0 top-[1px] w-full h-[98%] overflow-hidden flex bg-primary border-0 hover:opacity-90`}
                >
                  <a className="px-8 text-3xl flex items-center md:px-28 text-transparent hover:text-transparent">
                    <div
                      className={`${
                        pathname == "/" ? "bg-text-pink-2" : "bg-text-grey-1"
                      }`}
                    >
                      Home
                    </div>
                  </a>
                  <img
                    src={PolygonIcon}
                    className={`absolute right-0 top-[50%] -translate-y-2/4 ${
                      pathname == "/" ? "block" : "hidden"
                    }`}
                  />
                </div>
              </div>
            </li>
            <li
              className="cursor-pointer"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: "1",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="relative w-full h-full py-12 px-12 text-center overflow-hidden bg-gradient-to-r from-transparent via-[#E9EAEC] to-transparent">
                {/* Layout */}
                <div className="absolute left-0 top-[1px] w-full h-[98%] overflow-hidden flex bg-primary border-0 hover:opacity-90">
                  <a className=" px-8  text-3xl flex items-center md:px-28 text-transparent hover:text-transparent">
                    <div
                      className={`${
                        pathname == "/blogs"
                          ? "bg-text-pink-2"
                          : "bg-text-grey-1"
                      }`}
                    >
                      Blogs
                    </div>
                  </a>
                  <img
                    src={PolygonIcon}
                    className={`absolute right-0 top-[50%] -translate-y-2/4 ${
                      pathname == "/blogs" ? "block" : "hidden"
                    }`}
                  />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute left-[50%] translate-x-[-50%] z-10 lg:translate-x-0 lg:left-0 top-[13%] lg:top-0 max-w-[500px] w-full px-6 lg:px-0 sm:px-1 m-auto lg:h-full lg:w-full lg:max-w-full @container">
        {/* Content */}
        <Content />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
