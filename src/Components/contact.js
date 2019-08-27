import React from 'react';
import styled from 'styled-components';
 import {Grid, Cell,List,ListItem,ListItemContent}  from 'react-mdl'
import FooterPage from "./footerPage";
const Container=styled.div`

margin:auto;

padding-top: 2em;
position:fixed;
width: 100%;
height: 100%;
justify-content: center;

.contact-grid{
 text-align: center;

 justify-content: center;
 color:black;
 background: white;
  width: 80%;
  height: 550px;
  margin-bottom: 20px;
}
.profilePhoto {
height: 250px;
 }

.contact-text {
 text-align: center;
margin: auto;
padding-top: 1em;
width:65%;
}
.contact-grid h2{
 font-family: 'Anton', sans-serif;
}
.contact-grid p{
font-family: 'Oxygen',sans-serif;
}
 .contact-grid hr {
  width:50%;
  margin:auto;
  border-top: 5px dotted black;
 }
 .contacts-phone{
  font-size: 25px;
  font-family: 'Anton';
 }
 .contacts-list i{
  font-size: 50px;
  padding-right: 5rem;
 }



`;
const contact=()=> {
    return  (
        <Container className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                <h2>Elman Əhmədov</h2>
                    <img src={require("../Media/elmanactive.jpg")} alt="avatar" className="profilePhoto"/>
                    <p className="contact-text"> 1994-ci ildə Hacıqabul rayonunda anadan olmuşam.2001-ci ildə 1-ci sinfə daxil olub 2012-ci ildə həmin məktəbin 11-ci sinfini bitirmişəm.Milli Aviasiya Akademiyasını və Azərbaycan Texniki Universitetini bitirmişəm</p>

                </Cell>
                <Cell col={6}>
                    <h2>Contacts</h2>
                    <hr/>

        <div className="contacts-list">
            <List>
                <ListItem>
                    <ListItemContent className="contacts-phone">
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        +994559319197</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent className="contacts-phone">

                        <i className="fa fa-linkedin-square" />   elman-ehmedov-b23963a7</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent className="contacts-phone">
                        <i className="fa fa-envelope-square" />
                       elman_ehmedov@bk.ru</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent className="contacts-phone">
                        <i className="fa fa-skype"/>
                        elman.ehmedov90
                    </ListItemContent>
                </ListItem>
            </List>
        </div>



                </Cell>
            </Grid>
            <FooterPage/>

        </Container>
    )
}
export default contact;