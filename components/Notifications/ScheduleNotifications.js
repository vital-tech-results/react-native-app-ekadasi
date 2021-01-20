import * as Notifications from "expo-notifications";

export default async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "1Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Ekadasi.`,
    },
    trigger: {
      repeats: true,
      year: 2021,
      month: 1,
      day: 19,
      hour: 20,
      minute: 37,
      second: 2,
    },
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "2Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 1,
      day: 20,
      hour: 4,
      minute: 29,
      second: 2,
    },
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "3Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 1,
      day: 20,
      hour: 8,
      minute: 15,
      second: 2,
    },
  });
}
