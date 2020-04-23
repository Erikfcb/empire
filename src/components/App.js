import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

import Chart from "./Chart";
import Tabs from "./Tabs";
import Loader from "./Loader";
import { tabs } from "./Tabs/utils";
import { getCharts } from "../services/api";

function App() {
  const [active, setTab] = useState(tabs[0].title);
  const [charts, setCharts] = useState([]);
  const [loading, setLoading] = useState(true);

  const timestamp = useMemo(
    () => tabs.find(({ title }) => title === active).time,
    [active]
  );

  useEffect(() => {
    setLoading(true);

    getCharts(timestamp)
      .then(setCharts)
      .finally(() => setLoading(false));
  }, [timestamp]);

  return (
    <Wrapper>
      <Tabs tabs={tabs} setTab={setTab} active={active} />
      {loading ? <Loader /> : <Chart data={charts} />}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
