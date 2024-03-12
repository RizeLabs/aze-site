import AZEText from "../../assets/AZE.svg";
import AZETextH1 from "../../assets/AZE-h.svg";
import BgGradient from "../../assets/backgroundGradient.svg";

export const LeftSection = () => {
  return (
    <>
        {/* Left section */}
      
      <div className="lg:h-[69%] lg:w-[17%] lg:absolute bg-transparent top-[12.2%] left-0 @container">
        
        <div className="relative w-full h-[99%] text-center overflow-hidden lg:bg-gradient-to-b from-transparent via-[#E9EAEC] to-transparent">
          
          <div className="lg:absolute left-0 top-0 w-[99.6%] h-[100%] overflow-hidden lg:bg-primary border-0">
            {/* Content */}
            <div className="flex lg:w-full lg:h-full flex-row-reverse lg:flex-col my-8 lg:my-0">
              
              {/* <div> */}
              <img src={AZEText} className="hidden lg:block lg:w-full lg:ml-[-5px] xl:ml-[-30px] lg:h-[80%] 2xl:h-[85%] rotate-[90deg] lg:rotate-[0deg]" />
              <img src={AZETextH1} className="lg:hidden max-w-[20rem] max-h-[15rem] w-full h-full" />
              <span className="text-base lg:rotate-[-90deg] font-bold w-[92px] lg:w-[72px] flex self-end mr-[5%] xl:mr-[25%] lg:mr-[5%] text-white-800 text-left">Poker on Polygon Miden</span>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${BgGradient})` }} className="lg:bg-img bg-img-mobile absolute inset-0" ></div>
      </div>
    </>
  )
};