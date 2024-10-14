import Bg from "@/assets/bg.jpg";
import Gallery from "@/components/Image/Gallery";
import Join from "@/components/Join/Join";
import { sharedMetadata } from "@/utils/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "WHAT IF-Rwanda | Gallery",
};

const Page = () => {

    return (
        <div>
            <div className="relative">
                <img
                    src={Bg.src}
                    alt="About Us Hero"
                    className="w-full h-[200px] md:h-[300px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-4 md:pl-[150px]">
                    <p className="text-primary text-[12px] md:text-[15px] font-[700] opacity-0">
                        WHAT IF RWANDA
                    </p>
                    <h1 className="text-white text-[36px] md:text-[64px] font-bold py-2">
                        Gallery
                    </h1>
                    <p className="text-white mt-2 text-[14px] md:text-[16px]">
                        Learn more about the organisation and its actions.
                    </p>
                </div>
            </div>

            <Gallery />
            <Join />



        </div>
    );
};

export default Page;
