import styled from 'styled-components'

const HeadContent = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    border-bottom: 1px solid #eee;
`
const TextHead = styled.h2`
    font-size:1.5em;
`
const TextPost = styled.p`
    font-size:1.1em;
    word-break: break-all;
`
const TextTiny= styled.span`
    font-size: 0.8em;
`
const PostContent = styled.article`
    display: flex;
    border-bottom:1px solid #eee;
    padding: 10px;
`
const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 15px;
`
const AsideContent = styled.aside`
    padding:20px;
    width:350px;
    height: 100%;
    @media(max-width:900px){
        display: none;
    }
`
const TrendContent = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    height:430px;
    border-radius: 20px;
    background-color: rgb(245, 248, 250); 
    a{
        margin:10px;
    }
`
export {HeadContent,TextPost,TextHead,PostContent,TextContent,AsideContent,TrendContent,TextTiny}