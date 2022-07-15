import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SummaryPage from "./summary";
import CostItems from "./items";
import Disbursements from "./disbursements";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className="tabs-panels">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Summary" {...a11yProps(0)} />
        <Tab label="Cost Items" {...a11yProps(1)} />
        <Tab label="Disbursements" {...a11yProps(2)} />
        <Tab label="Finish" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} className="summary">
        <SummaryPage />
      </TabPanel>
      <TabPanel value={value} index={1} className="cost-items">
        <CostItems />
      </TabPanel>
      <TabPanel value={value} index={2} className="disbursements">
        <Disbursements />
      </TabPanel>
      <TabPanel value={value} index={3} className="finish">
        Finish
      </TabPanel>
    </Box>
  );
}
