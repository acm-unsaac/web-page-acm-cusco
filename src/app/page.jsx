import Image from "next/image";
import Header from "./components/Navigation/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

export default function Home() {
  return (
    <>
      {/*Header principal*/}

      <div className="flex justify-center bg-azul-git">
        <div className="h-[4000px] w-[1400px]">
          <Header />
          <Hero />
          <About />
        </div>
      </div>
    </>
  );
}
