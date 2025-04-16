import { Link } from "@inertiajs/react";
import BackgroundImage from "../images/IndexBackground5.jpg";

const Index = () => {
  return (
    <div 
    className="flex flex-col items-center justify-start h-screen w-screen bg-cover bg-center">
      <div className="flex flex-row w-screen bg-[#f4f7f8] h-20">
          <div className="flex flex-col items-end px-8 justify-center w-1/5 border-r-4 border-y-[3px] border-[#3b4d5c]">
            <h1 className="font-roboto text-2xl font-semibold text-[#1a2e3b] tracking-tight">
              LOCALPULSE
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center w-4/5 border-y-[3px] border-[#3b4d5c]"> 

          </div>
      </div>
      <div 
        className="flex flex-col items-center justify-center w-screen h-[80vh] bg-cover bg-[position:center_90%]  bg-neutral-900"
        style={{ backgroundImage: `url(${BackgroundImage})` }}>

        <div className="flex flex-row items-center justify-center w-full h-full">
            <div className="flex flex-col justify-center items-center w-[40%] h-full bg-opacity-50">
              <div className="flex flex-col items-center justify-start w-[90%] h-[90%] border border-red-500">
                <div className="flex flex-col items-center justify-center w-[80%] h-[30%] mt-20 mr-16 border border-red-500">
                  <h1 className="text-6xl font-bold text-white font-roboto drop-shadow-lg">
                    LocalPulse
                  </h1>
                  <p className="text-sm text-white mr-4">
                    Your trusted platform for barangay profiling.
                  </p>
                </div>

              </div>
              


            </div>




            <div className="flex flex-col items-center w-[60%] h-full">

            </div>

        </div>
      </div>

      


    </div>
  );
};

export default Index;
