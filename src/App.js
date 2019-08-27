import React from 'react';
import {Layout,Header,Textfield,Drawer,Navigation,Content,HeaderRow} from 'react-mdl'
import {Link} from 'react-router-dom';
import Main from "./Components/Main";
 import FooterPage from './Components/footerPage';
 import styled from 'styled-components';


import './App.css';
const Container=styled.div`

.designNav{

{/* this is my body*/}

/* background: #283c86;*/
  /* fallback for old browsers */
  
/*background: -webkit-linear-gradient(to right, #45a247, #283c86);  /* Chrome 10-25, Safari 5.1-6 */
/* background: linear-gradient(to right, #45a247, #283c86); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
.headerNav{
background: #283c86;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #45a247, #283c86);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #45a247, #283c86); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.drawer{
background-color: #009688;
}
.navBottom{
background-color: #d1d8e0;
height: 90%;
}
.title-header {
text-decoration: none;
color:white;
}

`;

function App() {
  return (
       <div>


      <Container className="demo-big-content">
          <Layout className="designNav">
              <Header title={<Link className="title-header" to="/">Elman </Link>}  className="headerNav" scroll>
                  {/* Header ve HeaderRow olaraq alt alta yazsaq ve Header e waterfall elave edib Headerow a search,onChange kimi xususiyyetleri teyin ede bilerik*/}
                  {/*
                  <Header title="Elman">
                      <Textfield
                          value=""
                          onChange={() => {}}
                          label="Search2"
                          expandable
                          expandableIcon="search"
                      />
                      */}
                      <Navigation>
                          <Link to="/aboutMe">About me</Link>
                          <Link to="/resume">Resume</Link>
                          <Link to="/projects">Projects</Link>
                          <Link to="/contact">Contacts</Link>
                      </Navigation>

              </Header>
              <Drawer title={<Link className="title-header" to="/">Elman </Link>} className="drawer">
                  <Navigation className="navBottom">
                      <Link to="/aboutMe">About me</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contacts</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>

      </Container>


       </div>


  );
}
export default App;
