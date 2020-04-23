import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Chart from "./Chart";
import Tabs from "./Tabs";
import Loader from "./Loader";
import { tabs } from "./Tabs/utils";
import { getCharts } from "../services/api/getCharts";

function App() {
  const [active, setTab] = useState(tabs[0].title);
  const [charts, setCharts] = useState(null);

  useEffect(() => {
    setCharts(null);
    const timestamp = tabs.find(({ title }) => title === active).time;

    getCharts(timestamp, setCharts);
  }, [active]);

  return (
    <Wrapper>
      <Tabs tabs={tabs} setTab={setTab} active={active} />
      {charts ? <Chart data={charts} /> : <Loader />}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
