import Header from "../components/Navigation/Header";
import Hero from "../components/Hero/Hero";
import AcmTeams from "../components/AcmTeams";
import MembersSection from "../components/Members";

export default function Home() {
  return (
    <>
      {/*Header principal*/}

      <div className="flex justify-center bg-azul-git">
        <div className="h-auto w-[1400px] px-4">
          <Header />
          <Hero />
          <AcmTeams />
          <MembersSection />
        </div>
      </div>
    </>
  );
}
