import React, { useState, useEffect } from "react";
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
  const [summary, setSummary] = useState();
  const [items, setItems] = useState();
  const [disbursements, setDisbursements] = useState();

  function check() {
    if (summary) {
      console.log(summary);
    }
  }

  useEffect(() => {
    check();
  });

  function switchFormParts(step) {
    let Component;
    switch (step) {
      case 0:
        Component = <SummaryPage setSummary={setSummary} />;
        break;
      case 1:
        Component = <CostItems setItems={setItems} />;
        break;
      case 2:
        Component = <Disbursements setDisbursements={setDisbursements} />;
        break;
      case 3:
        Component = (
          <Finish
            summary={summary}
            items={items}
            disbursements={disbursements}
          />
        );
        break;
      default:
    }
    return Component;
  }
  const ConnectorStyleProps = {
    disabledColor: "#bdbdbd",
    activeColor: "#1976d2",
    completedColor: "rgb(215, 129, 21)",
    size: 1,
    stepSize: "1.5em",
    style: "solid",
  };
  const StepStyleDTO = {
    activeBgColor: "#1976d2",
    activeTextColor: "#ffffff",
    completedBgColor: "rgb(215, 129, 21)",
    completedTextColor: "#ffffff",
    inactiveBgColor: "#e0e0e0",
    inactiveTextColor: "#ffffff",
    size: "2em",
    circleFontSize: "1rem",
    borderRadius: "50%",
  };

  const myMteps = [
    { label: "Summary Detail" },
    { label: "Primary Cost Items" },
    { label: "Disbursements" },
    { label: "Finish" },
  ];
  return (
    <div className="body">
      <div className="rest-of-the-form">
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
      <div className="form-control-buttons">
        <div className="prev-div">
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosNewIcon />}
            className="prev-button"
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
    </div>
  );
}
