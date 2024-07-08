import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Meteors } from "@/components/ui/meteros";
import { Drum, Languages, Layers, TerminalSquare } from "lucide-react";

const MainPage = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
};

const Header = ({ title, link, icon }) => {
  return (
    <div className="w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        {icon}

        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {title}
        </h1>

        <a
          className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
          href={link}
          target="_blank"
        >
          Explorer
        </a>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
};

const items = [
  {
    description: "A template for kick starting a Substrate based PoS chain.",
    header: (
      <Header
        title="Substrate Stencil"
        link="https://github.com/coretime-dev/substrate-stencil"
        icon={<Layers className="h-5 w-5 rounded-full mb-4 text-neutral-400" />}
      />
    ),
    className: "md:col-span-1",
  },
  {
    description: "Practical runtime pallets for devs to play around.",
    header: (
      <Header
        title="Play Substrate"
        link="https://github.com/coretime-dev/play-substrate"
        icon={<Drum className="h-5 w-5 rounded-full mb-4 text-neutral-400" />}
      />
    ),
    className: "md:col-span-1",
  },
  {
    description: "A portal for Substrate developer using Chinese.",
    header: (
      <Header
        title="subdev.cn"
        link="https://www.subdev.cn/"
        icon={
          <Languages className="h-5 w-5 rounded-full mb-4 text-neutral-400" />
        }
      />
    ),
    className: "md:col-span-1",
  },
  {
    description: "Build and delopy coretime in terminal.",
    header: (
      <Header
        title="Coretime CLI"
        link="https://github.com/coretime-dev/coretime.dev"
        icon={
          <TerminalSquare className="h-5 w-5 rounded-full mb-4 text-neutral-400" />
        }
      />
    ),
    className: "md:col-span-1",
  },
];

export default MainPage;
