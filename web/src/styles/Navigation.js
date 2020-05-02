import styled from 'styled-components'

const LiSchema = styled.li`
    list-style: none;
`

const Navigation = styled.header`
    height: 100%;
    min-width:310px;
    border-right: 1px solid #eee;
    @media(max-width:900px){
        min-width:100px
    }
`
const MainButton = styled(LiSchema)`
    font-size:30px;
    margin-bottom: 20px;
    :hover svg {
    color:#000
    }
`
const TrendButton = styled(LiSchema)`
    padding:20px;
    border-top:1px solid #ddd;
    transition: background-color 0.2s;
    :hover{
        background-color: #eee;
    };
    :last-child{
        border-bottom:1px solid #ddd
    }
`
export {Navigation,MainButton,TrendButton}