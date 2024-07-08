import { Github } from "lucide-react";

export function DynamicMenu() {
  return (
    <div className="absolute bottom-8 right-8 h-[300px] w-full">
      <nav
        className="menu"
        style={
          {
            filter: "url(#gooey)",
            width: "100%",
            height: "100%",
            "--spring-easing":
              "linear(0, 0.88117 15.492%, 1.09261 23.232%, 1.10421 28.713%, 0.99031 49.585%,0.99995)",
          } as React.CSSProperties
        }
      >
        <input type="checkbox" className="peer hidden" name="menu" id="menu" />
        <label
          className="absolute bottom-10 right-10 z-10 flex h-14 w-14 scale-125 cursor-pointer items-center justify-center rounded-full bg-mauve-dark-1 text-mauve-dark-12 transition-all duration-300  ease-[var(--spring-easing)] peer-checked:rotate-[135deg] peer-checked:scale-100
          dark:bg-mauve-light-1 dark:text-mauve-light-12 bg-zinc-700"
          htmlFor="menu"
        >
          <img
            className="rounded-full w-12"
            src="/coretime-dev.png"
            alt="Coretime DevTools"
          />
        </label>
        <a
          href="https://github.com/coretime-dev"
          target="_blank"
          className="absolute bottom-10 right-10 flex h-14 w-14 items-center justify-center 
          rounded-full bg-mauve-dark-1 text-mauve-dark-12 transition-transform duration-300 ease-in peer-checked:translate-y-[-80px] 
          peer-checked:duration-300 peer-checked:ease-[var(--spring-easing)] bg-zinc-700 dark:bg-mauve-light-1 dark:text-mauve-light-12"
        >
          <Github className="h-5 w-5 text-white dark:text-mauve-dark-1" />
        </a>
        <a
          href="https://x.com/kaichaosun"
          target="_blank"
          className="absolute bottom-10 right-10 flex h-14 w-14 items-center justify-center rounded-full bg-mauve-dark-1 text-mauve-dark-12 transition-transform duration-300 ease-in peer-checked:translate-y-[-162px]
          peer-checked:duration-300 peer-checked:ease-[var(--spring-easing)]
          dark:bg-mauve-light-1 dark:text-mauve-light-12 bg-zinc-700"
        >
          <div className="h-5 w-5 bg-zinc-700">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>X</title>
              <path
                fill="#ffffff"
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
              />
            </svg>
          </div>
        </a>
      </nav>
      <svg
        className="absolute hidden"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
