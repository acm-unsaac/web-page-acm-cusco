import { BrainSvg } from "../Svgs/BrainSvg"
import { CupSvg } from "../Svgs/CupSvg"
import { PcSvg } from "../Svgs/PcSvg"
import { ArticlesTeams } from "./ArticlesTeams"

const Teams = [
  {
    color: "A6FF00",
    content: {
      title: "dev",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web"
    },
    links: {
      code: "#",
      weebsite: "#"
    },
    svg: <PcSvg />
  },
  {
    color: "00FFF6",
    content: {
      title: "inv",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web"
    },
    links: {
      code: "#",
      weebsite: "#"
    },
    svg: <BrainSvg />
  },
  {
    color: "FA114F",
    content: {
      title: "icpc",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web"
    },
    links: {
      code: "#",
      weebsite: "#"
    },
    svg: <CupSvg />
  }
]


export const AcmTeams = () => {
  const text = "< ACM.teams />"
  return (
    <section className="h-screen flex flex-col items-center justify-around py-20">
      <h2>{text}</h2>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {Teams.map((team, index) => {
          return (
            <ArticlesTeams key={index} color={team.color} content={team.content} links={team.links}>
              {team.svg}
            </ArticlesTeams>
          )
        })
        }
      </div>

    </section>
  )
}
