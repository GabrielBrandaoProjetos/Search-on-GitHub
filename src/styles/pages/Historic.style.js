import styled from 'styled-components'
import {VscRepo} from 'react-icons/vsc'


export const HistoricContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    

    color: #24292E;

    h1{
        font-size: 2.6rem;
        margin-top: 8rem;
        margin-bottom: 1.4rem;
    }

    @media(min-width: 800px){
        max-width: 100vw;
        
        h1{
            font-size: 3.6rem;
            margin-top: 8rem;
        }
    }
`
export const Header = styled.header`
    width: 100%;
    height: 55px;

    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #24292E;
    padding: 0 10%;

    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));

    img{
        width: 3rem;
        height: 3rem;
        cursor: pointer;
    }

    img.git{
        background: #fff;
        border-radius: 50%;
    }

    img.historic{
        filter: invert(100%);
    }

    @media(min-width: 800px){
        width: 100%;
        height: 60px;

        padding: 0 20%;
    }
`
export const Section = styled.section`
    width: 80vw;
    max-height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #ffffff;
    border-radius: 8px;
    padding: 1.5rem 0;

    a{
        text-decoration: none;
        color: #24292E;
    }

    div + div{
        margin-top: 1rem;
    }

    @media(min-width: 800px){
        width: 50vw;
    }

    @media(min-width: 1000px){
        width: 40vw;
    }
`
export const UserContainer = styled.div`
    width: 90%;
    height: 9rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0.6rem 1.5rem;
    background: #EEEEEE;
    border-radius: 8px;

    strong{
        font-size: 1.1rem;
        font-weight: 700;
    }
    span{
        font-size: 1rem;
        font-weight: 600;
    }

    div.userContainerFooter{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
    }   

    div.footerIcon{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 1.8rem;
            height: 1.8rem;
        }
        @media(max-width: 500px){
            span{
                font-size: 0.7rem;
            }
        }
    }

    @media(min-width: 800px){
        div.userContainerFooter{
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: center;
        }
    }
`
export const HeaderUser = styled.header`
    display: flex;
    align-items: center;

    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin-left: 1.5rem;
    }

    div{ margin-left: 0.5rem; }

    strong{
        display:block;
        font-size: 1.4rem;
        font-weight: 700;
    }
    span{
        font-size: 1.2rem;
        font-weight: bold;
        color: #686759;
    }

`
export const ReposIcon = styled(VscRepo)`
    width: 1.8rem;
    height: 1.8rem;
`