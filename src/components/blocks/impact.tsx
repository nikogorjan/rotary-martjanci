"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { RotaryWheel3D } from "../special/rotary-wheel-3d";

export function Impact() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="font-bebas rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Transforming Lives Through Community Service
            </h1>
            <p className="font-karla mb-6 md:mb-8 md:text-md">
              Join us in our mission to create lasting change. Together, we can
              tackle the world's toughest challenges.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="font-bebas mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Polio Eradication
                </h6>
                <p className="font-karla">
                  Working tirelessly to eliminate polio and protect future
                  generations.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="font-bebas mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Disaster Relief
                </h6>
                <p className="font-karla">
                  Providing immediate assistance and support to communities
                  affected by disasters.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Get Involved"
                variant="link"
                size="link"
                className="font-karla"
                iconRight={<RxChevronRight/>}
              >
                Get Involved
              </Button>
            </div>
          </div>
          <div>
            <RotaryWheel3D/>
          </div>
        </div>
      </div>
    </section>
  );
}
