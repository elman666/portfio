import React from 'react';

import {Switch,Route} from 'react-router-dom';
import landingPage from "../Components/landingpage";
import aboutMe from "./aboutme";
import contact from "./contact";
import resume from "./resume";
import projects from "./projects";

 const Main = () => (
   <Switch>
       <Route exact path="/" component={landingPage}/>
       <Route exact path="/contact" component={contact}/>
       <Route exact path="/aboutMe" component={landingPage}/>
       <Route exact path="/resume" component={resume}/>
       <Route exact path="/projects" component={projects}/>
   </Switch>
 )
 export default Main;