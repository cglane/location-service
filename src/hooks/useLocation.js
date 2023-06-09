import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import "../screens/_mockLocation";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            // Update every 1s
            timeInterval: 1000,
            // Update every 10 meters
            distanceInterval: 10,
          },
          callback
        );
        if (!granted) {
          throw new Error("Location permission not granted");
        }
      } catch (e) {
        setErr(e);
      }
    };
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber){
        subscriber.remove();
      }
      subscriber = null
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
