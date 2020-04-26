import styled from 'styled-components'

const ButtonTweet = styled.button`
    width:${props => props.width|| 100}px;
    height:${props => props.height || 30}px;
    border-radius: 10px;
    background-color:rgb(0, 140, 255);
    border:none;
    color:white;
`
export {ButtonTweet}