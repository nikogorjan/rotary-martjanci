"use client";

import { Button } from "@relume_io/relume-ui";
import groupImage from "../assets/images/rotary-group.jpg"
import flag from "../assets/icons/slovenian-flag.svg"
import rotaryLogo from "../assets/images/Rotary-Logo-5016.png"
import martjanciLogo from "../assets/images/martjanci-logo.png"

export function HomeHero() {
  return (
    <section id="landing-hero" className="px-[5%] py-16 md:py-24 lg:py-28 bg-scheme1Background">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-fit border border-neutralDarkest15 rounded-large bg-white pl-2 pr-3 py-2 gap-2 mb-6">
                <img
                  src={flag}
                  className="size-5 object-cover"
                  alt="Flag"
                />
                <p className="font-karla text-sm ">Martjanci, Prekmurje, Slovenija</p>
              </div>
              <h1 className="font-bebas mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl max-w-md">
                Pridružite se nam pri ustvarjanju sprememb
              </h1>
              <p className="md:text-md font-karla max-w-[600px]">
                Pri Rotary verjamemo v moč prostovoljnega dela v skupnosti in etičnega vodenja. Skupaj lahko ustvarimo trajne spremembe in izboljšamo življenja po vsem svetu.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8 mb-6">
                <Button title="Join" className="bg-chatmansBlue font-karla border border-chatmansBlue rounded-xl">Postani clan</Button>
                <Button title="Learn More" variant="secondary" className="font-karla bg-transparent border border-neutralDarkest15 rounded-xl">
                  Preberi vec
                </Button>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center">
                <img
                  src={martjanciLogo}
                  alt="Flag"
                  className="mb-2 h-9"
                />
                <img
                  src={rotaryLogo}
                  alt="Flag"
                  className="mb-2 w-24"
                />

              </div>
            </div>
          </div>
          <div>
            <img
              src={groupImage}
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
