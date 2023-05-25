import Image from "next/image";
import React from "react";
import bg_foto from "../../public/images/blob_bg.svg";
import logo_html from "../../public/images/logo_html.svg";
import logo_css from "../../public/images/logo_css.svg";
import logo_js from "../../public/images/logo_js.svg";
import logo_react from "../../public/images/logo_react.svg";
import logo_nextjs from "../../public/images/logo_nextjs.svg";
import logo_tailwindcss from "../../public/images/logo_tailwindcss.svg";

function Hero() {
  return (
    <section id="id-home">
      <div className="max-w-7xl flex flex-col justify-center items-center mx-auto h-screen">
        <div className="flex flex-col p-5">
          <div className="flex flex-wrap-reverse justify-center items-center xl:gap-24">
            <div className="relative">
              <h1 className="text-4xl text-gray-700 font-bold my-3">
                Front-End Developer
              </h1>
              <p className="text-sm text-gray-600">
                Hi, Nama Saya Apri, <br /> Seorang Front-End Developer <br />{" "}
                Yang Fokus Dalam Pengembangan Website.
              </p>
              <p className="text-sm text-gray-600">
                Saya Tinggal di Musi Rawas, Indonesia 📍
              </p>
            </div>
            <div className="relative h-[360px] w-[350px] ">
              <Image
                alt="background"
                src={bg_foto}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-11 md:mt-3 justify-start items-center">
            <p className="text-2xl font-bold text-gray-700 pr-8 border-r-2 border-gray-700 mr-8">
              Tech Stack
            </p>
            <div className="relative h-10 w-10 mr-4">
              <Image
                alt="logohtml"
                src={logo_html}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-10 w-10 mr-4">
              <Image
                alt="logohtml"
                src={logo_css}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-10 w-10 mr-4">
              <Image
                alt="logohtml"
                src={logo_js}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-10 w-10 mr-4">
              <Image
                alt="logohtml"
                src={logo_react}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-10 w-10 mr-4">
              <Image
                alt="logohtml"
                src={logo_nextjs}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-10 w-10">
              <Image
                alt="logohtml"
                src={logo_tailwindcss}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
