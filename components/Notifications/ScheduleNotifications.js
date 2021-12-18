import * as Notifications from "expo-notifications";

export default async function schedulePushNotification() {
  Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Dvadasi with fasting for Yogini Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 7,
      day: 5,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Sayana Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 7,
      day: 19,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Kamika Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 8,
      day: 3,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Pavitropana Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 8,
      day: 17,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Annada Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 9,
      day: 2,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Parsva Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 9,
      day: 16,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Indira Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 10,
      day: 1,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Pasankusa Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 10,
      day: 15,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Rama Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 10,
      day: 31,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Utthana Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 11,
      day: 14,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Utpanna Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 11,
      day: 29,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Moksada Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 12,
      day: 13,
      hour: 3,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Saphala Ekadasi.`,
    },
    trigger: {
      repeats: false,
      year: 2021,
      month: 12,
      day: 29,
      hour: 3,
    },
  });
}
