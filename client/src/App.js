import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import OurMission from './OurMission';
import MyCalendar from './MyCalendar';
import EducationalInsight from './EducationalInsight'
import EducationalInsightFavorites from './EducationalInsightFavorites'
import EditProfile from './EditProfile';
import LoginForm from './LoginForm';
import SignUpFormOne from './SignUpFormOne';
import SignUpFormTwo from './SignUpFormTwo';
import SignUpFormThree from './SignUpFormThree';
import './App.css';
import OneSignal from 'react-onesignal';



function App() {
  const [count, setCount] = useState(0);
  const [signUpThreeComplete, setSignUpThreeComplete] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [myEvents, setMyEvents] = useState(null);
  const [educationalInsights, setEducationalInsights] = useState([]);

  const updateUser = (user) => setCurrentUser(user)

  //calendar states
  const [eventsToRender, setEventsToRender] = useState(null);

  const [periods, setPeriods] = useState([]);
  const [routineCheckups, setRoutineCheckups] = useState([]);
  const [mammograms, setMammograms] = useState([]);
  const [lastPeriod, setLastPeriod] = useState(null);
  const [lastPeriodStart, setLastPeriodStart] = useState(new Date());
  const [lastPeriodEnd, setLastPeriodEnd] = useState(new Date());
  const [lastRoutineCheckup, setLastRoutineCheckup] = useState(null);
  const [lastRoutineCheckupStart, setLastRoutineCheckupStart] =  useState(new Date());
  const [lastRoutineCheckupEnd, setLastRoutineCheckupEnd] =  useState(new Date());
  const [lastMammogram, setLastMammogram] = useState(null);
  const [lastMammogramStart, setLastMammogramStart] = useState(new Date());
  const [lastMammogramEnd, setLastMammogramEnd] = useState(new Date());
  const [estimatedPeriodEvent, setEstimatedPeriodEvent] = useState(null);
  const [selfBreastExamEvent, setSelfBreastExamEvent] = useState(null);
  const [routineCheckupEvent, setRoutineCheckupEvent] = useState(null);
  const [mammogramEvent, setMammogramEvent] = useState(null);
  //end of calendar states

  useEffect(() => {
    OneSignal.init({
      appId: "5a6aa5da-e8c9-42a0-abe1-1140e4644c38"
    });
  }, []);

  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((person) => setCurrentUser(person));
  }, []);

  useEffect(() => {
    fetch("/educational_insights")
    .then((r) => r.json())
    .then((educationalInsights) => {
      console.log(educationalInsights)
      setEducationalInsights(educationalInsights);
    })
  }, []);

  function handleEditProfile(patchReqObj) {
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchReqObj),
    })
  }

  useEffect(() => {
    if (currentUser !== null ) {
    fetch(`/users/${currentUser.id}/events`)
    .then(res => res.json())
        .then((events) => {
          events.forEach((event) => {
            event['allDay'] = event['all_day'];
            delete event['all_day'];
            let dateStartString = event['start'];
            event['start'] = new Date(dateStartString);
            let dateEndString = event['end'];
            event['end'] = new Date(dateEndString);
          })
          console.log(events);
          setMyEvents(events);
        })
    }
  },[currentUser, setEventsToRender])

  function handleSignUpTwo(patchReqObj) {
    fetch(`/users/${currentUser.id}`, {
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(patchReqObj)
    })
    .then(res => res.json())
    .then((user) => updateUser(user))
    setCount(count + 1);
  }

  function handleSignUpThree(patchReqObj) {
    fetch(`/users/${currentUser.id}`, {
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(patchReqObj)
    })
    .then(res => res.json())
    .then((user) => updateUser(user))
    setSignUpThreeComplete(true);
    setCount(count + 1);
  }

  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  useEffect(() => {
    if (myEvents !== null && eventsToRender === null) {
      myEvents.filter((event) => {
        if (event['title'] === "Period") {
          setPeriods([...periods, event])
        }
      })

      myEvents.filter((event) => {
        if (event['title'] === "Routine Checkup") {
          setRoutineCheckups([...routineCheckups, event])
        }
      })

      myEvents.filter((event) => {
        if (event['title'] === "Mammogram") {
          setMammograms([...mammograms, event])
        }
      })
      // setEventsToRender(...eventsToRender, estimatedPeriodEvent, mammogramEvent, selfBreastExamEvent, routineCheckupEvent);
    }
  }, [myEvents, eventsToRender])  

  useEffect(() => {
    if (routineCheckups != []) {
      setLastRoutineCheckup(routineCheckups[routineCheckups.length - 1]);
    }
  }, [routineCheckups])

  useEffect(() => {
    if (periods != []) {
      setLastPeriod(periods[periods.length-1]);
    }
  }, [periods])

  useEffect(() => {
    if (mammograms != []) {
      setLastMammogram(mammograms[mammograms.length-1]);
    }
  }, [mammograms])

  useEffect(() => {
    if (lastPeriod !== null) {
      setLastPeriodStart(new Date(lastPeriod["start"]));
      setLastPeriodEnd(new Date(lastPeriod["end"]));
    }
  }, [setLastPeriod])

  useEffect(() => {
    if (lastMammogram !== null) {
      setLastMammogramStart(new Date(lastMammogram["start"]));
      setLastMammogramEnd(new Date(lastMammogram["end"]));
    }
  }, [setLastMammogram])

  useEffect(() => {
    if (lastRoutineCheckup !== null) {
      setLastRoutineCheckupStart(new Date(lastRoutineCheckup["start"]));
      setLastRoutineCheckupEnd(new Date(lastRoutineCheckup["end"]));
    }
  }, [setLastRoutineCheckup])

  useEffect(() => {
    if (myEvents != null && lastPeriodStart !== null) {
      setEstimatedPeriodEvent({
          "id": 3,
          "title": "Estimated Period",
          "start": lastPeriodStart.addDays(parseInt(currentUser["average_cycle_length"])),
          "end": lastPeriodEnd.addDays(parseInt(currentUser["average_cycle_length"])),
          "allDay": true
        })
        setSelfBreastExamEvent({
          "id": 4,
          "title": "Self Breast Exam Due",
          "start": lastPeriodEnd.addDays(5),
          "end": lastPeriodEnd.addDays(5),
          "allDay": true
        })
    }
  }, [setLastPeriodStart, myEvents])

  useEffect(() => {
    if (myEvents != null && lastMammogramStart !== null && currentUser.age >= 40) {
     setMammogramEvent({
        "id": 5,
        "title": "Mammogram Due",
        "start": lastMammogramStart.addDays(365),
        "end": lastMammogramEnd.addDays(365),
        "allDay": true
      })
    }
  }, [setLastMammogramStart, myEvents])

  useEffect(() => {
    if (myEvents != null && lastRoutineCheckupStart !== null) {
      setRoutineCheckupEvent({
        "id": 6,
        "title": "Routine Checkup Due",
        "start": lastRoutineCheckupStart.addDays(365),
        "end": lastRoutineCheckupEnd.addDays(365),
        "allDay": true
      })
      setCount(1);
    }
  }, [setLastRoutineCheckupStart, myEvents])

  useEffect(() => {
    if (count === 1) {
      if (currentUser.age >= 40) {
        setEventsToRender([...myEvents, routineCheckupEvent, mammogramEvent, estimatedPeriodEvent, selfBreastExamEvent])
        setCount(2);
      }
      if (currentUser.age < 40) {
        setEventsToRender([...myEvents, routineCheckupEvent, estimatedPeriodEvent, selfBreastExamEvent])
        setCount(2);
      }
    }
  }, [count])

  useEffect(() => {
    console.log(eventsToRender)
  }, [eventsToRender])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  return (
    <div id="background" style={{overflow: "scroll", height: "100vh"}}>
    <header>
      <img id="banner-img" src="/logo.jpeg" alt="banner"/>
    </header>
      <NavBar currentUser={currentUser} routineCheckupEvent= {routineCheckupEvent} mammogramEvent={mammogramEvent} 
        estimatedPeriodEvent={estimatedPeriodEvent} selfBreastExamEvent={selfBreastExamEvent} onLogout={updateUser}/>
        <Routes>
          {/* { user === null && signUpThreeComplete === false ? (
            <Route path="/" element={<OurMission />}/>
          ) : (
            <Route path="/" element={<MyCalendar myEvents={myEvents} />}/> )
          } */}
          <Route path="/editprofile" element={<EditProfile onEditProfile={handleEditProfile} />}/>
          <Route path="/users/new" element={<SignUpFormOne onSignUpOne={updateUser} />}/>
          <Route path="/signuptwo" element={<SignUpFormTwo onSignUpTwo={handleSignUpTwo} />}/>
          <Route path="/signupthree" element={<SignUpFormThree onSignUpThree={handleSignUpThree} />}/>
          <Route path="/login" element={<LoginForm onLogin={updateUser} />}/>
          <Route path="/mycalendar" element={<MyCalendar currentUser={currentUser} eventsToRender={eventsToRender} setEventsToRender={setEventsToRender} />}/>
          <Route path="/educationalinsight" element={<EducationalInsight educationalInsights={educationalInsights}/>}/>
          <Route path="/educationalinsightfavorites" element={<EducationalInsightFavorites/>}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/" element={<OurMission />}/>
        </Routes>
  </div>
  );
}

export default App;
