import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import viewCommentsPage from './components/pages/viewCommentsPage';
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import LandingPage from "./components/pages/landingPage";
 
import HomePage from "./components/pages/homePage";
import LoginPage from "./components/pages/loginPage";
import AddCommentPage2 from "./components/pages/addCommentPage2";
 

import Signup from "./components/pages/registerPage";
import PrivateUserProfile from "./components/pages/privateUserProfilePage";
 
import MbtaAlerts from "./components/pages/mbtaAlerts";
 
import TrainTrackerPage from "./components/pages/trainTrackerPage";
 
import RoutePatterns from "./components/pages/routePatterns";
 
import ViewCommentsPage from "./components/pages/viewCommentsPage"




import { createContext, useState, useEffect } from "react";
 
import getUserInfo from "./utilities/decodeJwt";
 
export const UserContext = createContext();
//test change
//test again
const App = () => {
  const [user, setUser] = useState();
 
  useEffect(() => {
    setUser(getUserInfo());
  }, []);
 
  return (
    <>
      <Navbar />
      <UserContext.Provider value={user}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/homePage" element={<HomePage />} />
          <Route exact path="/loginPage" element={<LoginPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/privateUserProfile" element={<PrivateUserProfile />} />
          <Route path="/trainTrackerPage" element={<TrainTrackerPage />} />
          <Route exact path="/mbtaAlerts" element={<MbtaAlerts />} />
          <Route exact path="/routePatterns" element={<RoutePatterns />} />
          <Route exact path="/addCommentPage2" element={<AddCommentPage2 />} />
          <Route exact path="/viewComments" element={<ViewCommentsPage />} />
 
        </Routes>
      </UserContext.Provider>
    </>
  );
};



export default App
