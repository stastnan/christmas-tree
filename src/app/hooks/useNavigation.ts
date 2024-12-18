import { useState } from "react";

export function useStepNavigation(initialStep: number, finalStep: number) {
  const [activeStep, setActiveStep] = useState(initialStep);

  const goToNextStep = () => {
    setActiveStep((prevStep) =>
      prevStep < finalStep ? prevStep + 1 : prevStep
    );
  };

  const goToPreviousStep = () => {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return { activeStep, goToNextStep, goToPreviousStep };
}
