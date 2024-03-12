import DiscordIcon from "../../assets/discordIcon.svg";
import GithubIcon from "../../assets/githubIcon.svg";
import TwitterIcon from "../../assets/twitterIcon.svg";
import OkayBtn from "../../assets/okayBtn.svg";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Left section */}
      <div className="lg:h-[19%] lg:w-[66%] lg:absolute bg-transparent lg:left-0 lg:bottom-0">
        <div className="lg:relative w-full h-full lg:clip-top-right-lg overflow-hidden lg:bg-gradient-to-tr from-45% from-transparent to-[#E9EAEC] @container">
          <div className="lg:absolute left-0 bottom-0 w-[99.9%] h-[99.7%] lg:clip-top-right-lg overflow-hidden lg:bg-primary border-0">
            {/* Content */}
            <div className=" lg:flex flex flex-col lg:flex-row items-center lg:items-center h-full lg:justify-around @3xl:gap-14 gap-4 @3xl:px-20 @2xl:px-12 m-auto my-8 lg:my-0 lg:px-0">
              <div className="text-2xl font-bold flex flex-col gap-2 bg-gradient-to-r from-white from-50% to-gray-400 text-transparent bg-clip-text">
                <div className="text-transparent bg-clip-text">
                  We're building
                </div>
                <div>
                  <span className="bg-text-pink-2 text-transparent">
                    Signup{" "}
                  </span>
                  for early access
                </div>
              </div>
              <div className="clip-top-right-md relative max-w-[340px] h-[50px] @3xl:min-w-[320px] @2xl:min-w-[280px] w-full overflow-hidden bg-gradient-to-r from-[#E9EAEC] to-gray-600 py-2 px-3 cursor-pointer">
                <div className="absolute w-[98.7%] h-[93%] bottom-[1.5px] left-[2px] clip-top-right-md bg-primary "></div>
                <div className="flex absolute top-[7.5%] left-1% justify-between w-[92%] h-[85%] items-center self-center">
                  <form
                    action="https://forms.gle/yoTFvLYT5C9AbAiw5"
                    method="get"
                    target="_blank"
                    className="contents"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent caret-pink-500 w-[80%] outline-none gap-1.5 placeholder:text-[#9296A0]"
                      placeholder="Enter Email"
                      required
                    />
                    <button type="submit" className="contents">
                      <img
                        src={OkayBtn}
                        className="cursor-pointer hover:opacity-90"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right section Desktop */}
      <div className="lg:h-[19%] lg:w-[27%] lg:absolute bg-transparent lg:right-0 lg:bottom-0">
        <div className="relative w-full h-full lg:clip-top-left lg:overflow-hidden lg:bg-gradient-to-tl from-50% from-transparent to-[#E9EAEC]">
          <div className="lg:absolute right-0 bottom-0 w-[99.7%] h-[99.5%] lg:clip-top-left overflow-hidden lg:bg-primary border-0 my-8 mb-16 lg:my-0">
            <div className="w-full h-full flex justify-center items-center lg:justify-center gap-8">
              <a
                href="https://twitter.com/Aze_Cards"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={DiscordIcon}
                  alt="Discord Icon"
                  className="w-10 h-10 cursor-pointer hover:opacity-85"
                />
              </a>

              <a
                href="https://github.com/Rizelabs/aze-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GithubIcon}
                  className="w-10 h-10 cursor-pointer hover:opacity-85"
                />
              </a>

              <a
                href="https://twitter.com/Aze_Cards"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={TwitterIcon}
                  className="w-10 h-10 cursor-pointer hover:opacity-85"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
