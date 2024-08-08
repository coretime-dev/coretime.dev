import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Meteors } from "@/components/ui/meteros";
import { Drum, Languages, Layers, TerminalSquare } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const Header = ({ title, link, icon, ready = true }) => {
  return (
    <div className="w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        {icon}

        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {title}
        </h1>

        {ready ? (
          <a
            className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
            href={link}
            target="_blank"
          >
            Explorer
          </a>
        ) : (
          <Dialog>
            <DialogTrigger>
              <div className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Explorer
              </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center justify-center h-[300px]">
              <DialogTitle className="text-3xl">Under construction</DialogTitle>
              <DialogDescription className="text-lg">
                Stay updated by following us on{" "}
                <a
                  className="text-primary"
                  href="https://x.com/coretime_dev"
                  target="_blank"
                >
                  Twitter
                </a>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        )}

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
    description: "A portal for Substrate developers using Chinese.",
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
    description: "Build and deploy coretime in terminal.",
    header: (
      <Header
        title="Coretime CLI"
        link="https://github.com/coretime-dev/coretime-cli"
        icon={
          <TerminalSquare className="h-5 w-5 rounded-full mb-4 text-neutral-400" />
        }
        ready={false}
      />
    ),
    className: "md:col-span-1",
  },
];

export default MainPage;
