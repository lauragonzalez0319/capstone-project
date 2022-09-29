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



function App() {
  const [count, setCount] = useState(0);
  const [signUpThreeComplete, setSignUpThreeComplete] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((person) => setCurrentUser(person));
  }, []);

  function handleEditProfile(postReqObj) {
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postReqObj),
    })
  }

  useEffect(() => {
    if (currentUser !== null) {
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
  }, [count, currentUser])

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

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  useEffect(() => {
    console.log(signUpThreeComplete)
  }, [signUpThreeComplete])

  const updateUser = (user) => setCurrentUser(user)

  return (
    <div id="background" style={{overflow: "scroll", height: "100vh"}}>
    <header>
      <img id="banner-img" src="/logo.jpeg" alt="banner"/>
    </header>
      <NavBar currentUser={currentUser} signUpThreeComplete={signUpThreeComplete} onLogout={updateUser}/>
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
          <Route path="/mycalendar" element={<MyCalendar myEvents={myEvents} currentUser={currentUser}/>}/>
          <Route path="/educationalinsight" element={<EducationalInsight />}/>
          <Route path="/educationalinsightfavorites" element={<EducationalInsightFavorites/>}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/" element={<OurMission />}/>
        </Routes>
  </div>
  );
}

export default App;
