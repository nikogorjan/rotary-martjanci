"use client";

import { Button } from "@relume_io/relume-ui";

export function HomeHero() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                Join Us in Making a Difference Today
              </h1>
              <p className="md:text-md">
                At Rotary, we believe in the power of community service and
                ethical leadership. Together, we can create lasting change and
                improve lives around the world.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Join">Join</Button>
                <Button title="Learn More" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
