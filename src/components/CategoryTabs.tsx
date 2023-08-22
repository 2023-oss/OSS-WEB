import { Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  index: number;
  value: number;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ index, value, children }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Typography component="div" sx={{ p: 3 }}>
          {children}
        </Typography>
      )}
    </div>
  );
};

const CategoryTabs: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs
        orientation="vertical"
        value={tabValue}
        onChange={handleTabChange}
        aria-label="Tab example"
      >
        <Tab label="기본" />
        <Tab label="개인정보" />
        <Tab label="안전" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        Content for Tab 1
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Content for Tab 2
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Content for Tab 3
      </TabPanel>
    </div>
  );
};

export default CategoryTabs;
