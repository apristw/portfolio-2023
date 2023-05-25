import React from "react";
import logo_in from "../../public/images/logo_in.svg";
import logo_github from "../../public/images/logo_github.svg";
import Image from "next/image";
import { useRouter } from "next/router";

function Medsos() {
  const route = useRouter();

  return (
    <>
      <div className="fixed top-[30%] xl:left-[10%] inset-0 h-96 w-24">
        <div className="flex flex-col gap-6 items-center h-full justify-center">
          <div
            className="relative h-6 w-6 hover:scale-105 hover:text-sky-700 cursor-pointer"
            onClick={() =>
              route.push("https://www.linkedin.com/in/aprisetiawan/")
            }
          >
            <Image
              alt="/"
              src={logo_in}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div
            className="relative h-6 w-6 hover:scale-105 cursor-pointer"
            onClick={() => route.push("https://github.com/apristw")}
          >
            <Image
              alt="/"
              src={logo_github}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Medsos;
