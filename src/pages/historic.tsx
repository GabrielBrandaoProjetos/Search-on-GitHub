import React, { useEffect} from 'react'
import Link from 'next/link'
//import { Link } from 'react-router-dom'
import * as Styled from '../styles/pages/Historic.style.js'

//import GitIcon from '../../assets/image/git-icon.svg'
// import HistoricIcon from '../../assets/image/history.svg'
// import FollowersIcon from '../../assets/image/followers.svg'

import { useHistoric } from '../contexts/history'

export default function Historic() {
    const {user, handleHistory} = useHistoric()

    useEffect(() => {
        handleHistory()
    })

    function clearSessionStorage() {
        sessionStorage.clear()
    }
    
    return(
        <Styled.HistoricContainer>
            <h1>Histórico</h1>
            <Styled.Header>
                <Link href="/"><img className="git" src="assets/image/git-icon.svg" alt="GitHub" onClick={clearSessionStorage}/></Link>
                <div>
                    <Link href="/historic"><img className="historic" src="assets/image/history.svg" alt="Histórico"/></Link>
                </div>
            </Styled.Header>
            {user && (
                <Styled.Section>
                    {user.map((user) => {
                        return(
                            <Styled.UserContainer key={user.id}>
                                <Styled.HeaderUser>
                                    <img src={user.avatar_url} alt="Imagem do usuário"/>
                                    <div>
                                        <strong>{user.name}</strong>
                                        <span>{user.login}</span>
                                    </div>
                                </Styled.HeaderUser>
                                <div className="userContainerFooter">
                                    <div className="footerIcon">
                                        <Styled.ReposIcon/> 
                                        <strong>&nbsp;{user.public_repos}</strong>
                                        <span> &nbsp;Repositórios</span>
                                        <strong> &ensp;&middot;&ensp;</strong>
                                    </div>
                                    <div className="footerIcon">
                                        <img src="/assets/image/followers.svg" alt="Followers"/> 
                                        <strong>&nbsp;{user.followers}</strong>
                                        <span> &nbsp;Seguidores</span>
                                        <strong> &ensp;&middot;&ensp;</strong>
                                        <strong>{user.following ?? 0}</strong>
                                        <span> &nbsp;Seguindo</span>
                                    </div>
                                </div>
                            </Styled.UserContainer>
                        )
                    })}
                </Styled.Section>
            )}
        </Styled.HistoricContainer>
    )
}