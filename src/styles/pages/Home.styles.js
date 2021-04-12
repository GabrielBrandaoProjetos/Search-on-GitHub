import styled from 'styled-components'
import { Field, ErrorMessage} from 'formik'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

export const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #24292E;

    h1{
        font-size: 2.6rem;
        margin-top: 2rem;
    }

    @media(min-width: 800px){
        max-width: 100vw;
        
        h1{
            font-size: 3.6rem;
            margin-top: 6rem;
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
export const Fields = styled(Field)`
    width: 80vw;
    height: 4rem; 

    display: block;

    border: 0;
    border-radius: 8px;
    margin-top: 1.4rem;
    padding-left: 15px;
    
    @media(min-width: 800px){
        width: 40vw;
        height: 4rem;
    }
    
`
export const ErrorMsg = styled(ErrorMessage)`
    margin-left: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
`

export const Search = styled.div`
    width: 80vw;
    height: 40rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #ffffff;

    margin-top: 1rem;
    padding-top: 1rem;
    border-radius: 8px;

    overflow: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-button:single-button{
        height: 20px; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    div + div{
        border-top: 1px solid #b3b2a3;
    }

    @media(min-width: 800px){
        width: 40vw;
    }
`

export const SearchItem = styled.div`
    width: 90%;
    padding: 1rem 0;

    button{
        border: 0;
        background: none;
        cursor: pointer;
    }

    div.searchItemContainer{
        display: flex;
        align-items: center;
        margin-left: 3rem;
        img{
        width: 4rem;
        height: 4rem;
        margin-right: 0.8rem;
        border-radius: 50%;
        }
        strong{
            display:block;
            font-size: 1.4rem;
            font-weight: 700;
        }
    }

    :hover{
        background: #82787878;
    }
`

export const Pagination = styled.div`
    border-top: none;

    display: flex;
    align-items: center;
    
    margin: 0 auto;
    margin-top: 1.2rem;

    button{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 4rem;
        height: 4rem;
        border: 0;
        font-size: 1.6rem;
        background: transparent;
        border-radius: 3px;
        cursor: pointer;

        :hover{
            background: #82787878;
            transition: 0.4s;
        }
    }
`

export const ArrowLeft = styled(BsArrowLeft)`
    height: 2.5rem;
    
`

export const ArrowRight = styled(BsArrowRight)`
    height: 2.5rem;
`

export const Section = styled.section`
    width: 80vw;
    max-height: 65vh;

    background: #ffffff;

    border-radius: 8px;
    margin-top: 1.4rem;

    a{
        text-decoration: none;
        color: #24292E;
    }

    overflow: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none
    }

    @media (min-width: 800px){
        width: 60vw;
        height: 65vh;

        display: grid;
        grid-template-columns: 1fr 1fr;

        a + a{
            margin-top: 1rem;
        }
        
        div.headerSection{
            height: 65vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
        }

        div.repositorioSection{
            max-height: 94%;
            overflow: hidden;
            overflow-y: scroll;

            margin: auto 0;

            ::-webkit-scrollbar{
                display: none
            }
        }
    } 
`
export const HeaderSection = styled.header`
    display: flex;
    align-items: center;
    margin-left: 4rem;
    
    padding-top: 2rem;

    img{
        width: 5.5rem;
        height: 5.5rem;
        margin-right: 0.8rem;
        border-radius: 50%;
    }
    strong{
        display:block;
        font-size: 1.6rem;
        font-weight: 700;
    }
    span{
        font-size: 1.4rem;
        font-weight: bold;
        color: #686759;
    }

    @media (min-width: 800px){
        img{
            width: 8rem;
            height: 8rem;
        }
        strong{
            font-size: 2.2rem;
        }
        span{
            font-size: 1.8rem;
        }
    }
`
export const Text = styled.div`
    margin-left: 4rem;
    margin-top: 1.4rem;

    font-size: 1.1rem;
    font-weight: 500;

    span{color: #686759;}

    @media (min-width: 800px){
        font-size: 1.4rem;
        line-height: 2.5rem;
        margin-top: 2rem;
    }
`
export const Repositorio = styled.div`
    width: 90%;
    height: 9rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 1rem auto;
    padding: 1rem 1.4rem;
    background: #EEEEEE;
    border-radius: 8px;

    h2{
        font-size: 1.2rem;
        font-weight: 700;
    }
    p{
        font-size: 1rem;
        color: #686759;
        font-weight: 600;
        overflow: hidden;
    }
    span{
        font-size: 0.8rem;
        font-weight: 700;
        text-align: right;
    }

    @media (min-width: 800px){
        padding: 1rem 1.4rem;

        h2{
            font-size: 1.2rem;
        }
        p{
            font-size: 1rem;
        }
        span{
            font-size: 0.8rem;
        }
    }
`