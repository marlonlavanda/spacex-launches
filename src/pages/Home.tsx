import { useState, useEffect } from "react";

import { getAllLaunches } from "../services/getLaunches";
import { Launch } from "../types";
import Grid from "../components/Grid";
interface AppState {
  launches: Array<Launch>;
}

function Home() {
  const [launches, setLaunches] = useState<AppState["launches"]>([]);

  useEffect(() => {
    getAllLaunches().then((res) => setLaunches(res));
  }, []);

  console.log(launches);
  return (
    <>
      <Grid launches={launches} />
    </>
  );
}

export default Home;
