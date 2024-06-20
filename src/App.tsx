import { useState } from "react";
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
    } = useStepper();
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
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-20 mt-20">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Depoly your coretime now!</h1>
        <Button onClick={() => setCount(count + 1)}>Hello {count}</Button>
        <div className="flex w-1/2 flex-col gap-4">
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
      </div>
    </>
  );
}

export default App;
