import Twelve from "@/public/images/10rjs.png";
import Thirteen from "@/public/images/11rjs.png";
import One from "@/public/images/1js.png";
import Three from "@/public/images/1rjs.png";
import Two from "@/public/images/2js.png";
import Four from "@/public/images/2rjs.png";
import Five from "@/public/images/3rjs.png";
import Six from "@/public/images/4rjs.png";
import Seven from "@/public/images/5rjs.png";
import Eight from "@/public/images/6rjs.png";
import Nine from "@/public/images/7rjs.png";
import Ten from "@/public/images/8rjs.png";
import Eleven from "@/public/images/9rjs.png";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ImageCarousel() {
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">Resultados da academia</h2>
        <p className="text-xl text-gray-400">
          Algumas imagens das soluções dos exercícios das academia de JavaScript
          e ReactJS
        </p>
      </div>
      <Carousel width={800}>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={One}
            width={1080}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Two}
            width={1080}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Three}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Four}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Five}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Six}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Seven}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Eight}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Nine}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Ten}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Eleven}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Twelve}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
        <div>
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={Thirteen}
            width={1920}
            height={1080}
            alt="Features 02"
          />
        </div>
      </Carousel>
    </div>
  );
}
