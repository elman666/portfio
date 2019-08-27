import React from 'react';
import styled from 'styled-components';
import { Grid ,Cell} from 'react-mdl';
import FooterPage from "./footerPage";
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";

const Container=styled.div`

width:100%;
margin:auto;
.landing-grid{
background: #283c86;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #45a247, #283c86);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #45a247, #283c86); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
position:fixed;
top:0;
left:0;
width:100%;
height: 100%;
text-align: center;
}
.avatar {
 padding-top:5em;
border-radius: 30%;
display: block;
  margin-left: auto;
  margin-right: auto;
width:350px;
height:350px;
}
.banner-text{
background-color: black;
opacity: .8;
width: 75%;
margin: auto;
border-radius: 10px;
}
.banner-text h1{
color:white;
font-weight: bold;
font-size: 66px;
text-align: center;
}
.banner-text hr {
  border-top: 5px dotted white;
  width: 50px;
  margin: auto;
}
.banner-text p {
padding:1em;
 color:white;
  font-width: bold;
  font-size:30px;
  text-align: center;
  
}
.social-link{
 display: flex;
 justify-content:space-between;
 width: 50%;
 margin: auto;
}
 .social-link i {
  color:white;
  font-size: 5em;
  padding: 8px;
 }
`;
const landingPage=()=> {
    return  (
      <Container>
    <Grid className="landing-grid">
        <Cell col={12}>
            <img src={require("../Media/elman2.jpg")} alt="avatar" className="avatar"/>
            <div className="banner-text">
                <h1>Full stack developer</h1>
                <hr/>
                <p>Java |HTML/CSS | Bootstrap | Oracle | C# | JS | Kotlin |React |MS SQL </p>
                 <div className="social-link">
                     {/* Linked in*/}
                     <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                         <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                     </a>
                     {/* github */}
                     <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                         <i className="fa fa-github-square"  aria-hidden="true"/>
                     </a>
                     {/* youtube*/}
                     <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                         <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                     </a>

                     {/* github in*/}
                     <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                         <i className="fa fa-youtube-square"  aria-hidden="true"/>
                     </a>
                 </div>
            </div>
        </Cell>
        </Grid>
          <MDBFooter color="blue" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
                  <MDBRow>
                      <MDBCol md="6">
                          <h5 className="title">Footer Content</h5>
                          <p>
                              Here you can use rows and columns here to organize your footer
                              content.
                          </p>
                      </MDBCol>
                      <MDBCol md="6">
                          <h5 className="title">Links</h5>
                          <ul>
                              <li className="list-unstyled">
                                  <a href="#!">Link 1</a>
                              </li>
                              <li className="list-unstyled">
                                  <a href="#!">Link 2</a>
                              </li>
                              <li className="list-unstyled">
                                  <a href="#!">Link 3</a>
                              </li>
                              <li className="list-unstyled">
                                  <a href="#!">Link 4</a>
                              </li>
                          </ul>
                      </MDBCol>
                  </MDBRow>
              </MDBContainer>
              <div className="footer-copyright text-center py-3">
                  <MDBContainer fluid>
                      &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                  </MDBContainer>
              </div>
          </MDBFooter>
          <FooterPage/>
        </Container>
    )
}
export default landingPage;