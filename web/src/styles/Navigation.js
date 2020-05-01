import styled from 'styled-components'

const Navigation = styled.header`
    height: 100%;
    min-width:310px;
    border-right: 1px solid #eee;
    @media(max-width:900px){
        min-width:100px
    }
`
const MainButton = styled.li`
    margin-bottom: 20px;
    list-style: none;
    font-size:30px;
    :hover svg {
    color:#000
}
`
export {Navigation,MainButton}