/**
 *  Common Spinner section 
 * 
 * @version 1.0.0 -31-jan-2024
 * @author  Matias Riquelme - m.riquelmee98@gmail.com 
 * @since   1.0.0 -31-jan-2024
 * 
 */

import styled from 'styled-components';


export const FilterContainer = styled.div`
display: ${props => props.notFlex ? 'block': 'flex'};
width: ${props => props.width? props.width : 'initial'};
flex-direction: ${props => props.column ? 'column': 'row'};
justify-content: ${props => props.justifyContent? props.justifyContent: 'initial'};
align-items: ${props => props.alignItems? props.alignItems: 'initial'};
align-self: ${props => props.alignSelf? props.alignSelf: 'initial'};
margin-top: ${props => props.margintop? props.marginTop: 'initial'};
margin-right: ${props => props.marginRight? props.marginRight: 'initial'};
margin-bottom: ${props => props.marginBottom? props.marginBottom: 'initial'};
margin-left: ${props => props.marginLeft ? props.marginLeft: 'initial'};
height: ${props => props.height ? props.height: 'initial'};
border: ${props => props.border ? '0.1rem solid #E2E8EE': 'none'};
border-right: ${props => props.borderRight ? '0.1rem solid #E2E8EE' : 'none'}; I
padding: ${props => props.padding ? props.padding: 'initial'};
& .MuiFormLabel-root{
    color: rgba(255, 255, 255, 0.87)
}
& .MuiButtonBase-root{
    color: rgba(255, 255, 255, 0.87)
}
& .MuiOutlinedInput-notchedOutline{
    border-color: rgba(255, 255, 255, 0.87)
}
& .MuiInputBase-input {
    color: rgba(255, 255, 255, 0.87)
}

`