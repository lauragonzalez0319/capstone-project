import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu, Icon, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Notifications from './Notifications'

function NavBar({ currentUser, routineCheckupEvent, mammogramEvent, estimatedPeriodEvent, selfBreastExamEvent, onLogout }) {
  const [activeItem, setActiveItem] = useState("My Calendar");

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogout(null);
        navigate(`/`)
      }
    });
  }

  return (
    <div>
      { currentUser === null || currentUser["self_breast_exam_notification_on"] === null || "errors" in currentUser === true ? (
        <>
          <Menu id="landing-nav-container">
            <Menu.Menu position='right'>
            <Menu.Item>
              <Link to="/">
                <Button id="buttons" size="huge">Our Mission</Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/users/new">
                <Button id="buttons" size="huge">Sign Up</Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">
                <Button id="buttons" size="huge">Log In</Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/aboutus">
                <Button id="buttons" size="huge">About Us</Button>
              </Link>
            </Menu.Item>
            </Menu.Menu>
          </Menu>
        </>
      ) : ( 
        <div>
          <Menu vertical id="nav-container" >
            <Menu.Item
              id="nav-item-container"
              as={Link}
              to="/MyCalendar"
              name="My Calendar"
            >
              <Button 
                id="buttons"
                fluid 
                size="huge" icon labelPosition='left'
                active={activeItem === "My Calendar"}
                onClick={(event) => setActiveItem("My Calendar")}
              >
                <Icon name="calendar outline" size="large"/>
                My Calendar
              </Button>
            </Menu.Item>
            <Menu.Item
              id="nav-item-container"
              as={Link}
              to="/educationalinsight"
              name="Educational Insight" 
            >
              <Button 
                id="buttons" 
                fluid 
                size="huge" 
                icon labelPosition='left'
                active={activeItem === "Educational Insight"}
                onClick={(event) => setActiveItem("Educational Insight")}>
                <Icon name="lightbulb outline" size="large"/>
                Educational Insight
              </Button>
            </Menu.Item>
            <Menu.Item
              id="nav-item-container"
              name="Educational Insight Favorites"
              as={Link}
              to="/educationalinsightfavorites" 
            >
                <Button 
                  id="buttons"
                  fluid  
                  size="huge" icon labelPosition='left'
                  active={activeItem === "Educational Insight Favorites"}
                  onClick={(event) => setActiveItem("Educational Insight Favorites")}
                  >
                  <Icon name="heart outline" size="large"/>
                  Educational Insight Bookmarks
                </Button>
            </Menu.Item>
            <Menu.Item
              id="nav-item-container"
              name="Edit Profile"
              as={Link}
              to="/editprofile" 
            >
              <Link to="/editprofile">
              <Button
                id="buttons" 
                fluid 
                size="huge" icon labelPosition='left'
                active={activeItem === "Edit Profile"}
                onClick={(event) => setActiveItem("Edit Profile")}
              >
                  <Icon name="edit" size="large"/>
                  Edit Profile
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item
              id="nav-item-container"
              name="Our Mission" 
              as={Link}
              to="/" 
            >
              <Button 
                id="buttons" 
                fluid 
                size="huge" 
                icon labelPosition='left'
                active={activeItem === "Our Mission"}
                onClick={(event) => setActiveItem("Our Mission")}
              >
                <Icon name="handshake outline" size="large"/>
                Our Mission
              </Button>
            </Menu.Item>
            <Menu.Item
              id="nav-item-container"
              name="About Us" 
              as={Link}
              to="/aboutus" 
            >
              <Button 
                id="buttons" 
                fluid 
                size="huge" icon labelPosition='left'
                active={activeItem === "About Us"}
                onClick={(event) => setActiveItem("About Us")}
              >
                <Icon name="leaf" size="large"/>
                About Us
              </Button>
            </Menu.Item>
            <Menu.Item id="nav-item-container">
              <Button fluid id="logout" variant="outline" onClick={handleLogoutClick}>
                Logout
              </Button>
            </Menu.Item>
          </Menu>
          <Segment textAlign="center" size="huge" id="nav-dash-divider">My FloMinders DashBoard</Segment>
          <Dashboard currentUser={currentUser} routineCheckupEvent= {routineCheckupEvent} mammogramEvent={mammogramEvent} 
            estimatedPeriodEvent={estimatedPeriodEvent} selfBreastExamEvent={selfBreastExamEvent}/>
          <Notifications currentUser={currentUser} routineCheckupEvent= {routineCheckupEvent} mammogramEvent={mammogramEvent} 
            estimatedPeriodEvent={estimatedPeriodEvent} selfBreastExamEvent={selfBreastExamEvent}/>
        </div>
      )}
    </div>
  )
}

export default NavBar