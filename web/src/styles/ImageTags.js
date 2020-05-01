import styled from 'styled-components'

const ImagePerson = styled.img`
    margin-right: 20px;
    height:${props => props.height};
    border-radius: 50%;
`

const ImageText = styled.img`
    width:100%;
    height: auto;
    border-radius: 10px;
    margin:15px 0;
`

export {ImagePerson,ImageText}