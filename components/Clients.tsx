import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {companies, testimonials} from "@/data";

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">

            <h1 className="heading">
                Kind words from {" "}
                <span className="text-purple">Co-workers</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
};

export default Clients;
