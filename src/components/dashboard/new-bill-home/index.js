import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import SummaryPage from "./summary";
import CostItems from "./items";
import Disbursements from "./disbursements";
import Finish from "./finish";
import "./body.css";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
  const myMteps = [
    { label: "Summary Detail" },
    { label: "Primary Cost Items" },
    { label: "Disbursements" },
    { label: "Finish" },
  ];
  return (
    <div className="body">
      <div className="rest-of-the-form">
        <div className="form-control-buttons">
          <div className="prev-div">
            <Button
              variant="outlined"
              startIcon={<ArrowBackIosNewIcon />}
              className="prev-button"
              hidden={previousHidden(activeStep)}
              onClick={() => {
                if (activeStep > 0) {
                  setActiveStep(activeStep - 1);
                }
              }}
            >
              Previous
            </Button>
          </div>
          <div className="next-div">
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIosIcon />}
              className="next-button"
              hidden={nextHidden(activeStep)}
              onClick={() => {
                if (activeStep < 3) {
                  setActiveStep(activeStep + 1);
                }
              }}
            >
              Next
            </Button>
          </div>
        </div>
        <Stepper
          className="form-steps"
          steps={myMteps}
          activeStep={activeStep}
          connectorStateColors={true}
          hideConnectors={false}
          connectorStyleConfig={ConnectorStyleProps}
          styleConfig={StepStyleDTO}
        />
        {switchFormParts(activeStep)}
      </div>
    </div>
  );
}
