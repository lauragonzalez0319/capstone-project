import { React , useEffect, useState, useCallback, useRef } from 'react';
import { Button, Form, Dropdown, Input, Label, Message, Header, Grid } from 'semantic-ui-react';
import './MyCalendar.css';
import Calendar from 'react-calendar';
import { Calendar as BigCalendar } from 'react-big-calendar';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

function MyCalendar({ setCount, currentUser, eventsToRender, setEventsToRender }) {
  // const [localizer, setLocalizer] = useState(null);
  const localizer = momentLocalizer(moment)

  const [eventInputType, setEventInputType] = useState("");
  const [eventInputActive, setEventInputActive] = useState(false);
  const [eventInputDate, setEventInputDate] = useState(new Date());
  const [newEventToRender, setNewEventToRender] = useState(null);

  const eventTypeOptions = [
    {key: 'Period', text: 'Period', value: 'Period'}, 
    {key: 'Self Breast Exam', text: 'Self Breast Exam', value: 'Self Breast Exam'},
    {key: 'Mammogram', text: 'Mammogram', value: 'Mammogram'},
    {key: 'Routine Checkup', text: 'Routine Checkup', value: 'Routine Checkup'}
  ]

  // const handleSelectEvent = useCallback(
  //   (event) => window.alert(event.title),
  //   []
  // )

  // const handleSelectSlot = useCallback(
  //   ({ start, end }) => {
  //     const title = window.prompt('New Event name')
  //     if (title) {
  //       setMyEvents((prev) => [...prev, { start, end, title }])
  //     }
  //   },
  //   [setMyEvents]
  // )

  function handleSubmit(event) {
    // event.preventDefault();
    setEventInputActive(false);
    if (eventInputType === "Period") {
      let postReqObj = {
        "user_id": currentUser.id,
        "title": eventInputType,
        "start": eventInputDate[0],
        "end": eventInputDate[1],
        "all_day": true,
      }
      fetch(`/events`, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(postReqObj)
      })
      .then(res => {
        if(res.ok){
            res.json().then(event => {
              setEventsToRender([...eventsToRender, postReqObj])
              setCount(3)
            })
        } else {
            // res.json().then(json => setErrors(Object.entries(json.errors)))
        }
      })
    } else {
        let postReqObj = {
          "user_id": currentUser.id,
          "title": eventInputType,
          "start": eventInputDate[0],
          "end": eventInputDate[0],
          "all_day": true,
        }
        fetch(`/events`, {
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(postReqObj)
        })
        .then(res => {
          if(res.ok){
              res.json().then(event => {
                setEventsToRender([...eventsToRender, postReqObj])
              })
          } else {
              // res.json().then(json => setErrors(Object.entries(json.errors)))
          }
        })
      }
  }
  

  useEffect(() => {
    console.log(eventInputDate)
  }, [eventInputDate])

  return (
    <div>
      { eventsToRender !== null ? (
        <>
        <div id="calendar-container">
          <BigCalendar
            localizer={localizer}
            events={eventsToRender}
            startAccessor="start"
            endAccessor="end"
            // popup={true}
            // onSelectEvent={handleSelectEvent}
            // onSelectSlot={handleSelectSlot}
          />
        </div>
        <br></br>
        <div id="calendar-page-form-container">
        <Grid>
          <Grid.Row>
          <Grid.Column textAlign="center" width={16}>
            <Header as='h2' textAlign='center' block style={{backgroundColor: "#90b4ce", width: "100%"}}>Record Your Events in Your Calender For a FloMinder</Header>
            <Form onSubmit={handleSubmit} style={{width: "50%", display: "inline-block"}}>
              <Form.Field className="form-text">
              <Label id="labels" size="huge" pointing="below">Event type:</Label>
                <Dropdown 
                  style={{ fontSize: "18px" }}
                  fluid selection
                  options={eventTypeOptions} 
                  value={eventInputType}
                  onChange={(event, data) => {
                    setEventInputType(data.value)
                    setEventInputActive(true)
                  }}
                />
                <br></br>
                { eventInputActive === true ? (
                  <div>
                    <Header size="big" textAlign='center'>{`Select the date of your ${eventInputType.toLowerCase()} on the calendar below:`}</Header>
                      <div id="signup-calendar-container">
                        <Calendar
                          allowPartialRange={true}
                          selectRange={true}
                          value={eventInputDate}
                          onChange={setEventInputDate}
                        />
                      </div>
                  </div>
                ) : (
                  <></>
                )}
              </Form.Field>
            <Button style={{backgroundColor: "#8bd3dd", color: "black"}} size="huge" type='submit'>Add Event</Button>
          </Form>
          </Grid.Column>
          </Grid.Row>
          </Grid>
          </div>
      </>
      ) : (<></>) }
    </div>
  )
}

export default MyCalendar