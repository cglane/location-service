import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import "../screens/_mockLocation";

export default (shouldTrack, recording, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          // Update every 1s
          timeInterval: 1000,
          // Update every 10 meters
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching()
    } else if (subscriber) {
      subscriber.remove()
      setSubscriber(null)
    }
  }, [shouldTrack, recording]);

  return [err];
};
