import React from "react";
import İmgExample from "../../assets/Referances/refexample.png";
const ReferancesComponent = () => {
    return (
        <div className="mt-4 mb-4  container mx-auto flex justify-center">
            <div className="flex  justify-center ">
                <div className="flex flex-row  flex-wrap justify-start w-10/12  max-md:w-10/12 max-lg:w-10/12 max-lg:justify-center max-xl:justify-center max-2xl:w-full">
                    <img
                        className="w-80 h-48 p-4"
                        src={İmgExample}
                        alt="Example"
                    ></img>
                    <img
                        className="w-80 h-48 p-4"
                        src={İmgExample}
                        alt="Example"
                    ></img>
                    <img
                        className="w-80 h-48 p-4"
                        src={İmgExample}
                        alt="Example"
                    ></img>
                    <img
                        className="w-80 h-48 p-4"
                        src={İmgExample}
                        alt="Example"
                    ></img>
                    <img
                        className="w-80 h-48 p-4"
                        src={İmgExample}
                        alt="Example"
                    ></img>
                    <img
                        className="w-80 h-48 p-4"
                        src={İmgExample}
                        alt="Example"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default ReferancesComponent;
