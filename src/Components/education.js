import React from 'react';
import styled from 'styled-components';
import {Grid,Cell} from 'react-mdl';
 const Container =styled.div`
.university{
 margin-top: 0px;
}

`;

  const Education = (props) => {
       return  (
            <Container>
                 <Grid className="education-grid">
                     <Cell col={4} className="education-left">
                         <p>{props.startYear} - {props.endYear}</p>
                     </Cell>
                     <Cell col={8} className="education-right">
                         <h4 className="university">{props.university}</h4>
                         <p>{props.universitydescription}</p>
                         </Cell>
                 </Grid>



            </Container>

       )
  }
   export default Education;