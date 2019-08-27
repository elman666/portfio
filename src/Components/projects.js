import React,{Component} from 'react';
import styled from 'styled-components';
import {Tabs, Tab, Grid,Cell,Card,CardTitle, CardActions, Button,CardMenu,IconButton,CardText} from "react-mdl";
import police from '../Media/police.png';
import kassa from '../Media/kassa.jpg';
import potfo from '../Media/portfo.jpg';
import FooterPage from "./footerPage";
const Container=styled.div`
 .projects-grid{
 display:flex;
 
 }

.projects-card {
min-width: 450px;
margin:auto;
}
.projects-cardTitle {
 color:#000;
 height: 320px;


background-repeat: no-repeat;
background-position: center;

}
.projects-cardText{
font-weight: bold;
font-size:90px;
}
.projects-cardTitlee{


background-size: cover;
background-repeat: no-repeat;
height:175px;
}

`;
class Projects extends  Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }
    toggleCategories() {
        if(this.state.activeTab===0){
            return  (
                <Container className="projects-grid">
                    <Card shadow={5} className="projects-card">
                        <CardTitle className="projects-cardTitle" style={{backgroundImage: `url(${police} )`}}>
                            Police
                        </CardTitle>
                        <CardText classname="projects-cardText">
                            Polis akademiyası üçün hazırlanan davamiyyət sistemi
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Bitbucked</Button>
                        </CardActions>
                        <CardMenu  style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} className="projects-card">
                        <CardTitle className="projects-cardTitle" style={{backgroundImage: `url(data:image/jpeg;base64,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 )`}}>
                            HRMS
                        </CardTitle>
                        <CardText classname="projects-cardText">
                           Disertasi işi üçün HR idarəetmə sistemi
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Bitbucked</Button>
                        </CardActions>
                        <CardMenu  style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                </Container>








            )
        }
        if(this.state.activeTab===1) {
            return (
                <Card shadow={5} className="projects-card">
                    <CardTitle className="projects-cardTitle" style={{backgroundImage: `url(${kassa} )`}}>
                    </CardTitle>
                    <CardText classname="projects-cardText">
                        Avromart marketlər şəbəkəsi üçün kassa-anbar proqramı
                    </CardText>


                </Card>

            )
        }

            if(this.state.activeTab===2){
            return (
                <Card shadow={5} className="projects-card">
                    <CardTitle className="projects-cardTitle" style={{backgroundImage: `url(https://scontent-lga3-1.cdninstagram.com/vp/cb5e46069fed8a7ec648e24f2ec2a0f7/5D9F6506/t51.2885-15/e35/c173.0.734.734/s320x320/17934190_322332078184356_8696519385180798976_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com)`}}>
                        Orient
                    </CardTitle>
                    <CardText classname="projects-cardText">
                        Kurs avtomatlaşdırılmış sistemi
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Bitbucked</Button>
                    </CardActions>
                    <CardMenu  style={{color:'#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
            }
        if(this.state.activeTab===3){
             return (
                 <Card shadow={5} className="projects-card">
                     <CardTitle className="projects-cardTitlee" style={{backgroundImage: `url(${potfo} )`}}>
                     </CardTitle>
                     <CardText classname="projects-cardText">
                         React js ilə şəxsi portfoilomun hazırlanması
                     </CardText>


                 </Card>

             )
        }

    }

     render() {
         return (
              <Container className="category-tabs">
                  <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                      <Tab>Police academy</Tab>
                      <Tab>Cash expert</Tab>
                      <Tab>Java</Tab>
                      <Tab>portfoilo</Tab>
                  </Tabs>
                  {/* Section istifade ederek card lari yaxinlasdira bilerik*/}
                      <Grid >
                          <Cell col={12}>
                              <div className="content"> {this.toggleCategories()} </div>

                          </Cell>
                      </Grid>

              </Container>
         )
     }
}
export default Projects;