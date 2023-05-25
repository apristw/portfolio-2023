import React from "react";
import foto_aboutme from "../../public/images/foto_aboutme.jpg";
import Image from "next/image";

function About() {
  return (
    <>
      <div
        id="id-about"
        className="max-w-7xl h-screen flex lg:justify-center items-center mx-auto"
      >
        <div className="flex flex-wrap p-5 justify-center md:items-center gap-6 lg:gap-12">
          <div className="w-full md:w-2/5">
            <div className="relative h-56 md:h-72 rounded-xl overflow-hidden">
              <Image
                alt="img_foto"
                src={foto_aboutme}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <h2 className="font-medium text-xl text-blue-700">About Me</h2>
            <p className="text-3xl font-bold text-gray-700 py-2">
              Front-End Developer
            </p>
            <p className="text-sm text-gray-600">
              Halo Semua 👋 Nama saya Apri Setiawan. <br /> saya adalah seorang
              front-end web developer dengan fokus pada pengembangan website.
              Keahlian saya terletak pada penggunaan HTML, CSS, dan JavaScript.
              Saya juga terbiasa menggunakan framework ReactJs, Nextjs, Tailwindcss untuk membuat website yang mudah
              digunakan dan menarik secara visual. Saya bersemangat dalam
              menciptakan antarmuka web yang intuitif dan responsif untuk
              meningkatkan pengalaman pengguna. Saya juga seorang yang dapat
              bekerja sebagai tim dan sangat menerima masukan yang membangun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
