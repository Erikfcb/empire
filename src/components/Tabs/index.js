import "materialize-css";
import React, { useCallback } from "react";
import styled from "styled-components";
import { Tabs, Tab } from "react-materialize";

const TabsWrapper = ({ tabs, setTab, active }) => {
  const createTabs = useCallback(
    () =>
      tabs.map(({ title, time }) => (
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
      )),
    [tabs, active]
  );

  return (
    <Container
      className="tab-demo z-depth-1"
      onChange={event => setTab(event.target.text)}
    >
      {createTabs()}
    </Container>
  );
};

export default TabsWrapper;

const Container = styled(Tabs)`
  width: 1000px;
`;
