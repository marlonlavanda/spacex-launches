import { LaunchesResponseFromApi } from "../types";

export const getAllLaunches = () => {
  return fetchLaunches();
};

export const fetchLaunches = (): Promise<LaunchesResponseFromApi> => {
  return fetch(`${process.env.REACT_APP_API_URL}/launches`).then((res) =>
    res.json()
  );
};
