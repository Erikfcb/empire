import "materialize-css";
import React from "react";
import { Tabs, Tab } from "react-materialize";

const TabsWrapper = ({ tabs, setTab, active }) => (
  <Tabs
    className="tab-demo z-depth-1"
    onChange={event => setTab(event.target.text)}
  >
    {tabs.map(({ title, time }) => (
      <Tab
        key={title}
        active={title === active}
        options={{
          duration: 300,
          onShow: null,
          responsiveThreshold: Infinity,
          swipeable: false
        }}
        title={title}
      />
    ))}
  </Tabs>
);

export default TabsWrapper;
