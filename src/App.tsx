import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./globals.css";
import { Button } from "@/components/ui/button";
import {
  Step,
  Stepper,
  useStepper,
  type StepItem,
} from "@/components/ui/stepper";

function App() {
  const [count, setCount] = useState(0);

  const steps = [
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" },
  ] satisfies StepItem[];

  const Footer = () => {
    const {
      nextStep,
      prevStep,
      resetSteps,
      isDisabledStep,
      hasCompletedAllSteps,
      isLastStep,
      isOptionalStep,
    } = useStepper()
    return (
      <>
        {hasCompletedAllSteps && (
          <div className="h-40 flex items-center justify-center my-4 border bg-secondary text-primary rounded-md">
            <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
          </div>
        )}
        <div className="w-full flex justify-end gap-2">
          {hasCompletedAllSteps ? (
            <Button size="sm" onClick={resetSteps}>
              Reset
            </Button>
          ) : (
            <>
              <Button
                disabled={isDisabledStep}
                onClick={prevStep}
                size="sm"
                variant="secondary"
              >
                Prev
              </Button>
              <Button size="sm" onClick={nextStep}>
                {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
              </Button>
            </>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button>Hello</Button>

      <div className="flex w-full flex-col gap-4">
        <Stepper initialStep={0} steps={steps}>
          {steps.map(({ label }, index) => {
            return (
              <Step key={label} label={label}>
                <div className="h-40 flex items-center justify-center my-4 border bg-secondary text-primary rounded-md">
                  <h1 className="text-xl">Step {index + 1}</h1>
                </div>
              </Step>
            );
          })}
          <Footer />
        </Stepper>
      </div>
    </>
  );
}

export default App;
