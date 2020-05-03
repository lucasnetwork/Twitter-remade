import styled from 'styled-components'

const TitleHead = styled.div`
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
const PostLinkContent = styled(PostContent)`

`
export {TitleHead,TextPost,TextHead,PostContent,TextContent,PostLinkContent}