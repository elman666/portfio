import React from 'react';
import styled from 'styled-components';
 import {Grid, Cell, Footer} from 'react-mdl';
 import  Education from '../Components/education';
  import Experience from '../Components/experience';
  import Skills from "../Components/skills";
   import   FooterPage from '../Components/footerPage';
const Container=styled.div`
.resume-left-side{
text-align: center;
 
}
 .resume-right-side {
 
 background:#27221f;
color:white;
padding:2em;
 }
 .resume-photo {
  height: 200px;
 }
 .resume-name{
 padding-top: 1em;
 }
 .resume-profession {
  color:grey;
 }
 .resume-hr {
  border-top:3px solid #833fb2;
  width: 50%;
  margin-left: 25%;
 }
 .education-hr {
 border:3px solid #e22947
 }

`;
const resume=()=> {
    return  (
        <Container>
             <Grid className="resume-grid">
                 <Cell col={4} className="resume-left-side">

                     <img src={require("../Media/ubs.png")} alt="elman" className="resume-photo"/>
                     <h2 className="resume-name"> Elman Ahmedov </h2>
                     <h4 className="resume-profession">developer </h4>
                      <hr className="resume-hr"/>
                      <p className="resume-info">1994-ci ildə Hacıqabul rayonunda anadan olmuşam.2001-ci ildə 1-ci sinfə daxil olub 2012-ci ildə həmin məktəbin 11-ci sinfini bitirmişəm.Milli Aviasiya Akademiyasını və Azərbaycan Texniki Universitetini basa vurmusam </p>
                     <hr className="resume-hr"/>
                     <h5>Address</h5>
                     <p>Khan Shushinski 60/60</p>

                     <h5>Phone</h5>
                     <p>+9945593191917</p>
                     <h5>Email</h5>
                     <p>elmanehmedov66@gmail.com</p>
                     <h5>Web</h5>
                     <p>myebsite.com</p>
                     <hr className="resume-hr"/>
                 </Cell>

                 <Cell col={8} className="resume-right-side">
                     <h2>Education</h2>
                     <Education startYear={2012} endYear={2016} university="National Aviation of Academy" universitydescription="Very good university whick is located in Bine next to 25 km from Baku National Aviation of Academy grows side pilot and navigation also engineers"/>
                     <Education startYear={2017} endYear={2019} university="Azerbaijan Technical University" universitydescription="second university -master degreee Azərbaycan Respublikası Təhsil Nazirliyi, Azərbaycan Texniki Universiteti, Belarus Dövlət Rabitə Akademiyası 4-6 dekabr 2019-cu il “Telekommunikasiyada innovativ texnologiyalar” mövzusunda beynəlxalq elmi-texniki konfrans"/>
                      <hr className="education-hr" />

                      <h2>Experience</h2>
                     <Experience startYear="01.02.2015" endYear="15.06.2016" companyName="Ministry of Emergency Situations TTNDA Azərdövlətlayihə" aboutJob="Help desk"  />
                     <Experience startYear="25.11.2017" endYear="01.06.2018" companyName="Active It solutions" aboutJob="Help desk" />
                     <Experience startYear="02.06.2018" endYear="03.01.2019" companyName="Universal Business Solutions" aboutJob="software developer" />
                     <Experience startYear="01.03.2019" endYear="15.07.19" companyName="İktex MMC" aboutJob="software developer" />
                     <Experience startYear="15.07.2019" endYear="present" companyName="Ministry of İnternal Affairs" aboutJob="software developer" />
                     <hr className="education-hr" />
                     <h2>Skills</h2>
                     <Skills skill="c#" progress="32"/>
                     <Skills skill="JAVA" progress={72}/>
                     <Skills skill="React js"  progress="54"/>
                     <Skills skill="Oracle" progress="24"/>
                     <Skills skill="Ms sql" progress="45"/>
                     <Skills skill="HTML CSS" progress="82"/>
                     <Skills skill="Bootstrap" progress="32"/>





                 </Cell>


             </Grid>
            <FooterPage/>

        </Container>
    )
}
export default resume;