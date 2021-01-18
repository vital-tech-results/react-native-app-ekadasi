import React from "react";

import * as TaskManager from "expo-task-manager";

export default function SetFnState() {
  //https://medium.com/@whitestonedata/adding-timers-to-your-expo-managed-react-native-app-with-backgroundfetch-351dab97b96b

  let setStateFn = () => {
    console.log("State not yet initialized");
  };
  function myTask() {
    try {
      // fetch data here...
      const backendData = "Simulated fetch " + Math.random();
      console.log("myTask() ", backendData);
      this.setState({ setStateFn: backendData });
      console.log(this.state.setStateFn);
      return backendData
        ? BackgroundFetch.Result.NewData
        : BackgroundFetch.Result.NoData;
    } catch (err) {
      return BackgroundFetch.Result.Failed;
    }
  }
  async function initBackgroundFetch(taskName, taskFn, interval = 60 * 15) {
    try {
      if (!TaskManager.isTaskDefined(taskName)) {
        TaskManager.defineTask(taskName, taskFn);
      }
      const options = {
        minimumInterval: interval, // in seconds
      };
      await BackgroundFetch.registerTaskAsync(taskName, options);
    } catch (err) {
      console.log("registerTaskAsync() failed:", err);
    }
  }

  return <>initBackgroundFetch("myTaskName", myTask, 5);</>;
}
