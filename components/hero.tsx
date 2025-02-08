"use client";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-y-6 py-12">
      <div className="relative">
        <h1 className="text-gray-12 text-center text-[40px] leading-11 font-medium sm:text-5xl sm:leading-[52px]">
          Elevate <br /> your task.
        </h1>
      </div>
      <p className="text-gray-10 text-center sm:text-lg">
        Discover tools that make your tasks easier.
      </p>
      <Button>Subscribe for free</Button>
    </div>
  );
}
