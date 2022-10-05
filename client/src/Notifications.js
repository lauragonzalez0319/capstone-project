import React, { useEffect } from 'react';
import OneSignal from 'react-onesignal';

function Notifications({ currentUser, routineCheckupEvent, mammogramEvent, estimatedPeriodEvent, selfBreastExamEvent }) {
  const todaysDate = new Date();

  function daysUntil(date) {
    let difference = todaysDate.getTime() - date['start'].getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDays;
  }

  useEffect(() => {
    OneSignal.init({
      appId: "5a6aa5da-e8c9-42a0-abe1-1140e4644c38"
    });
  }, []);

  useEffect(() => {
    if (currentUser["period_notification_on"] && estimatedPeriodEvent !== null && daysUntil(estimatedPeriodEvent) === 2) {
      OneSignal.sendSelfNotification({title: "FloMind", message: "Estimated Period in Two Days", icon: "https://img.onesignal.com/tmp/20497a1a-f923-4c7c-8810-89486f4dbb47.png"})
    }
  }, [currentUser])
  
  return (
    <div>

    </div>
  )
}

export default Notifications