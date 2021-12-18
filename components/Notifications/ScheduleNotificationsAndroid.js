import * as Notifications from "expo-notifications";
//use dateTriggerInput trigger: {date: variableName}

export default async function schedulePushNotification() {
  // Notifications.cancelAllScheduledNotificationsAsync();

  let amalakiDateTriggerInput = new Date("March 24, 2021 00:01:01");
  let papamocaniDateTriggerInput = new Date("April 06, 2021 00:01:01");
  let kamadaDateTriggerInput = new Date("April 22, 2021 00:01:01");
  let varuthiniDateTriggerInput = new Date("May 06, 2021 00:01:01");
  let mohiniDateTriggerInput = new Date("May 22, 2021 00:01:01");
  let aparaDateTriggerInput = new Date("June 05, 2021 00:01:01");
  let pandavaDateTriggerInput = new Date("June 20, 2021 00:01:01");
  let dvadasiDateTriggerInput = new Date("July 05, 2021 00:01:01");
  let sayanaDateTriggerInput = new Date("July 19, 2021 00:01:01");
  let kamikaDateTriggerInput = new Date("August 03, 2021 00:01:01");
  let pavitropanaDateTriggerInput = new Date("August 17, 2021 00:01:01");
  let annadaDateTriggerInput = new Date("September 02, 2021 00:01:01");
  let parsvaDateTriggerInput = new Date("September 16, 2021 00:01:01");
  let indiraDateTriggerInput = new Date("October 01, 2021 00:01:01");
  let pasankusaDateTriggerInput = new Date("October 15, 2021 00:01:01");
  let ramaDateTriggerInput = new Date("October 31, 2021 00:01:01");
  let utthanaDateTriggerInput = new Date("November 14, 2021 00:01:01");
  let utpannaDateTriggerInput = new Date("November 29, 2021 00:01:01");
  let moksadaDateTriggerInput = new Date("December 13, 2021 00:01:01");
  let saphalaDateTriggerInput = new Date("December 29, 2021 00:01:01");

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Amalaki Ekadasi.`,
    },
    trigger: {
      repeats: false,
      date: amalakiDateTriggerInput,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Papamocani Ekadasi.`,
    },
    trigger: {
      repeats: false,
      date: papamocaniDateTriggerInput,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Kamada Ekadasi.`,
    },
    trigger: {
      repeats: false,
      date: kamadaDateTriggerInput,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Varuthini Ekadasi.`,
    },
    trigger: {
      repeats: false,
      date: varuthiniDateTriggerInput,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Mohini Ekadasi.`,
    },
    trigger: {
      repeats: false,
      date: mohiniDateTriggerInput,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Apara Ekadasi.`,
    },
    trigger: {
      repeats: false,
      date: aparaDateTriggerInput,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Pandava Nirjala Ekadasi.`,
    },
    trigger: {
      repeats: false,
      date: pandavaDateTriggerInput,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: `Tomorrow is Dvadasi with fasting for Yogini Ekadasi.`,
    },
    trigger: {
      repeats: false,
      date: dvadasiDateTriggerInput,
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
      date: sayanaDateTriggerInput,
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
      date: kamikaDateTriggerInput,
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
      date: pavitropanaDateTriggerInput,
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
      date: annadaDateTriggerInput,
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
      date: parsvaDateTriggerInput,
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
      date: indiraDateTriggerInput,
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
      date: pasankusaDateTriggerInput,
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
      date: ramaDateTriggerInput,
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
      date: utthanaDateTriggerInput,
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
      date: utpannaDateTriggerInput,
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
      date: moksadaDateTriggerInput,
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
      date: saphalaDateTriggerInput,
    },
  });
}
