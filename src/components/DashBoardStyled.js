/**
 *  Common Spinner section 
 * 
 * @version 1.0.0 - 31-Jan-2024 
 * @author  Matias Riquelme - m.riquelmee98@gmail.com 
 * @since   1.0.0 - 31-jan-2024
 * 
 */

import styled from 'styled-components';

export const DashBoardContainer = styled.div`

display: ${props => props.notFlex ? 'block': 'flex'};
width: ${props => props.width? props.width : 'initial'};
height: ${props => props.height? props.height : 'initial'};
flex-direction: ${props => props.column ? 'column': 'row'};
justify-content: ${props => props.justifycontent? props.justifycontent: 'initial'};
align-items: ${props => props.alignItems? props.alignItems: 'initial'};
align-content: ${props => props.aligncontent? props.aligncontent: 'initial'};
align-self: ${props => props.alignSelf? props.alignSelf: 'initial'};
margin-top: ${props => props.margintop? props.margintop: 'initial'};
margin-right: ${props => props.marginRight? props.marginRight: 'initial'};
margin-bottom: ${props => props.marginbottom? props.marginbottom: 'initial'};
margin-left: ${props => props.marginleft ? props.marginleft: 'initial'};
border: ${props => props.border ? '0.1rem solid gray': 'none'};
border-radius: ${props => props.borderr ? '1.2rem': 'none'};
background-color:${props => props.back ? '#2196f3': 'none'};
padding: ${props => props.padding ? props.padding: 'initial'};
font-size: ${props => props.font  ? '20px' : 'initial'};
flex-wrap:  ${props => props.wrap  ? 'wrap': 'initial'};
`