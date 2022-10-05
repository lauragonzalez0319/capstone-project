import { React, useEffect, useState } from 'react';
import { Card, Feed } from 'semantic-ui-react';

function Dashboard({ currentUser, routineCheckupEvent, mammogramEvent, estimatedPeriodEvent, selfBreastExamEvent }) {
  const todaysDate = new Date();

  function daysUntil(date) {
    let difference = todaysDate.getTime() - date['start'].getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return Math.abs(totalDays);
  }

  // useEffect(() => {
  //   console.log(typeof estimatedPeriodEvent["start"])
  // }, [estimatedPeriodEvent])
  
  return (
    <div id ="dashboard-container">
      { routineCheckupEvent !== null ? (
        <Card id="dashboard-card">
        <Card.Content>
          <Card.Header textAlign='center'>{`Welcome, ${currentUser.first_name}!`}</Card.Header>
        </Card.Content>
        <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label icon="time"/>
            <Feed.Content>
              <Feed.Summary id="dashboard-content">
                {`Estimated Period in ${daysUntil(estimatedPeriodEvent)} days`}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          <Feed.Event>
            <Feed.Label icon="time"/>
            <Feed.Content>
              <Feed.Summary id="dashboard-content">
              {`Self-Breast Exam in ${daysUntil(selfBreastExamEvent)} days`}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          <Feed.Event>
            <Feed.Label icon="time" />
            <Feed.Content>
              <Feed.Summary id="dashboard-content">
              {` Routine Checkup in ${daysUntil(routineCheckupEvent)} days`}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          {mammogramEvent != null ? (
          <Feed.Event>
            <Feed.Label icon="time" />
            <Feed.Content>
              <Feed.Summary id="dashboard-content">
              {`Mammogram in ${daysUntil(mammogramEvent)} days`}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          ) : (<></>)}
        </Feed>
        </Card.Content>
      </Card>
      ) : (<></>)}
  </div>
  )
}

export default Dashboard