import React from 'react';
 import styled from 'styled-components';
 import {Grid,Cell} from 'react-mdl';
  const Container=styled.div`

.experince-job {
margin-top:0px;
}
`;

  const Experience = (props) => {
       return  (
            <Container>
                 <Grid className="experience-grid">
                      <Cell col={4} className="experince-left">
                          <p>{props.startYear}- {props.endYear}</p>
                      </Cell>
                     <Cell col={8} className="experince-right">
                         <h4 className="experince-job">{props.companyName}</h4>
                         <p>{props.aboutJob}</p>

                     </Cell>


                 </Grid>

            </Container>
       )
  }
   export default  Experience;