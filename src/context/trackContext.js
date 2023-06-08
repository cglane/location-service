import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      break;
  }
};

const fetchTracks = (dispatch) => async () => {
  try {
    const tracks = await trackerApi.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: tracks.data });
  } catch (err) {}
  return "";
};

const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
