import * as Notifications from "expo-notifications";
//use dateTriggerInput trigger: {date: variableName}

export default async function schedulePushNotification() {
  Notifications.cancelAllScheduledNotificationsAsync();

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

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Pavitropana Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 8,
  //     day: 17,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Annada Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 9,
  //     day: 2,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Parsva Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 9,
  //     day: 16,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Indira Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 10,
  //     day: 1,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Pasankusa Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 10,
  //     day: 15,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Rama Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 10,
  //     day: 31,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Utthana Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 11,
  //     day: 14,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Utpanna Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 11,
  //     day: 29,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Moksada Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 12,
  //     day: 13,
  //     hour: 3,
  //   },
  // });

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     badge: 1,
  //     sound: true,
  //     title: "Hare Krsna! Friendly reminder:",
  //     body: `Tomorrow is Saphala Ekadasi.`,
  //   },
  //   trigger: {
  //     repeats: false,
  //     year: 2021,
  //     month: 12,
  //     day: 29,
  //     hour: 3,
  //   },
  // });
}
