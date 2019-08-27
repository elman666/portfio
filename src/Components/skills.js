import React from 'react';
import styled from 'styled-components';
import {Grid,Cell,ProgressBar} from 'react-mdl';
const Container=styled.div`

.skills-job {
margin-top:0px;
}
.skills-name {
display: flex;
}
.progressbar {
margin:auto;
width:75%;
}
`;

const Skills = (props) => {
    return  (
        <Container>
            <Grid>
                <Cell col={12} className="skills-left">
                    <div className="skills-name"> {props.skill }</div>
                        <ProgressBar progress={props.progress} className="progressbar" />
                </Cell>

            </Grid>

        </Container>
    )
}
export default  Skills;