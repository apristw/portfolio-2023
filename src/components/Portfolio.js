import Image from "next/image";
import React from "react";

import portfolio1 from "../../public/images/foto_portfolio1.jpg";
import portfolio2 from "../../public/images/foto_aboutme.jpg";
import expand_logo from "../../public/images/logo_expand.svg";
import github_logo from "../../public/images/logo_github.svg";

function Portfolio() {
  return (
    <>
      <div id="id-project" className="max-w-7xl mx-auto p-5 pt-24">
        <div className="flex justify-center mb-8">
          <h2 className="font-medium text-xl text-blue-700">Portfolio</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          <div className="relative w-full md:w-1/3 h-56 md:h-72 p-3 rounded-xl overflow-hidden">
            <Image
              alt="portfolio1"
              src={portfolio1}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col text-center justify-center p-3 ">
            <h3 className="text-xl text-gray-800 font-semibold py-2">
              Website Konveksi
            </h3>
            <p className="text-gray-700 text-sm">
              Website konveksi pakaian ini dirancang dengan tujuan memudahkan
              pengguna dalam mencari produk dan referensi sehingga dapat memilih
              pakaian yang ingin dipesan dengan mudah. Website ini menampilkan
              berbagai jenis produk pakaian dengan deskripsi, foto, dan harga
              yang jelas.
            </p>
            <div className="flex mt-4 justify-center items-center">
              <p className="border-r-2 pr-2 mr-2">Tech Use </p>
              <p className="font-bold mr-2">Next JS,</p>
              <p className="font-bold">TailwindCss</p>
            </div>
            <div className="flex justify-evenly mt-6">
              <div className="flex items-center gap-1 font-semibold cursor-pointer hover:scale-105">
                <p>Code</p>
                <div className="relative h-7 w-7">
                  <Image alt="logogithub" src={github_logo} fill />
                </div>
              </div>
              <div className="flex items-center gap-1 font-semibold cursor-pointer hover:scale-105">
                <p>Demo</p>
                <div className="relative h-8 w-8">
                  <Image alt="logoexpand" src={expand_logo} fill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap justify-center mt-28 gap-6 lg:gap-12">
          <div className="relative w-full md:w-1/3 h-56 md:h-72 p-3 rounded-xl overflow-hidden">
            <Image
              alt="portfolio1"
              src={portfolio2}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col text-center justify-center p-3 ">
            <h3 className="text-xl text-gray-800 font-semibold py-2">
              Website Konveksi
            </h3>
            <p className="text-gray-700 text-sm">
              Website konveksi pakaian ini dirancang dengan tujuan memudahkan
              pengguna dalam mencari produk dan referensi sehingga dapat memilih
              pakaian yang ingin dipesan dengan mudah. Website ini menampilkan
              berbagai jenis produk pakaian dengan deskripsi, foto, dan harga
              yang jelas.
            </p>
            <div className="flex mt-4 justify-center items-center">
              <p className="border-r-2 pr-2 mr-2">Tech Use </p>
              <p className="font-bold mr-2">Next JS,</p>
              <p className="font-bold">TailwindCss</p>
            </div>
            <div className="flex justify-evenly mt-6">
              <div className="flex items-center gap-1 font-semibold cursor-pointer hover:scale-105">
                <p>Code</p>
                <div className="relative h-7 w-7">
                  <Image alt="logogithub" src={github_logo} fill />
                </div>
              </div>
              <div className="flex items-center gap-1 font-semibold cursor-pointer hover:scale-105">
                <p>Demo</p>
                <div className="relative h-8 w-8">
                  <Image alt="logoexpand" src={expand_logo} fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
