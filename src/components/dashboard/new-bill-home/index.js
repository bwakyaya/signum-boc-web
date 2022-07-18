import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import SummaryPage from "./summary";
import CostItems from "./items";
import Disbursements from "./disbursements";
import Finish from "./finish";

export default function NewBillForm() {
  const [activeStep, setActiveStep] = useState(0);
  function switchFormParts(step) {
    let Component;
    switch (step) {
      case 0:
        Component = <SummaryPage />;
        break;
      case 1:
        Component = <CostItems />;
        break;
      case 2:
        Component = <Disbursements />;
        break;
      case 3:
        Component = <Finish />;
        break;
      default:
    }
    return Component;
  }
  const ConnectorStyleProps = {
    disabledColor: "#bdbdbd",
    activeColor: "#4494df",
    completedColor: "#04203A",
    size: 1,
    stepSize: "1.5em",
    style: "solid",
  };
  const StepStyleDTO = {
    activeBgColor: "#4494df",
    activeTextColor: "#ffffff",
    completedBgColor: "#04203A",
    completedTextColor: "#ffffff",
    inactiveBgColor: "#e0e0e0",
    inactiveTextColor: "#ffffff",
    size: "2em",
    circleFontSize: "1rem",
    borderRadius: "50%",
  };
  function nextHidden(x) {
    let hiddenValue;
    if (x === 3) {
      hiddenValue = true;
    } else {
      hiddenValue = false;
    }
    return hiddenValue;
  }
  function previousHidden(y) {
    let hiddenValue;
    if (y === 0) {
      hiddenValue = true;
    } else {
      hiddenValue = false;
    }
    return hiddenValue;
  }
  return (
    <div className="body">
      <Stepper
        className="form-steps"
        steps={[
          { label: "Summary Detail" },
          { label: "Primary Cost Items" },
          { label: "Disbursements" },
          { label: "Finish" },
        ]}
        activeStep={activeStep}
        connectorStateColors={true}
        hideConnectors={false}
        connectorStyleConfig={ConnectorStyleProps}
        styleConfig={StepStyleDTO}
      />
      {switchFormParts(activeStep)}
      <div>
        <button
          hidden={previousHidden(activeStep)}
          onClick={() => {
            if (activeStep > 0) {
              setActiveStep(activeStep - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          hidden={nextHidden(activeStep)}
          onClick={() => {
            if (activeStep < 3) {
              setActiveStep(activeStep + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
