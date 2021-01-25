import * as Notifications from "expo-notifications";

export default async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 1,
      day: 23,
    },
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 2,
      day: 7,
    },
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 2,
      day: 22,
    },
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 3,
      day: 8,
    },
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 3,
      day: 22,
    },
  });
}
