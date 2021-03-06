import styled,{createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto',Arial, Helvetica, sans-serif;
    }
    html,body,#root,.App{
        height:100%;
    }
    .App{
        display: flex;
    }
`

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export {Main,GlobalStyles}