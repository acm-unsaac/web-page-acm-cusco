import Image from "next/image";
import Header from "./components/Navigation/Header";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <>
      {/*Header principal*/}

      <div className="flex justify-center bg-azul-git">
        <div className="h-[1000px] w-[1400px]">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}
