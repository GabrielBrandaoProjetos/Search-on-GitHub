import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {Formik, Form} from 'formik'
import {format} from 'date-fns'
import * as Yup from 'yup'
import {useHistoric} from '../contexts/history'


import { getUser, getRepos, search, changePage } from '../services/api'
import * as Styled from '../styles/pages/Home.styles.js'


interface UserProps{
    id: number;
    name?: string;
    login: string;
    company?: string;
    location?: string;
    email?: string;
    avatar_url?: string;
    total_count?: number;
    html_url?: string;
}

interface ReposProps{
    id: number;
    name?: string;
    description?: string;
    updated_at?: string;
    html_url?: string;
}

interface Pagination{
    prev?: {url?: string, numberPage?: number}
    next?: {url?: string, numberPage?: number}
    last?: {url?: string, numberPage?: number}
    first?: {url?: string, numberPage?: number}
}

export default function Home(){
    const [user, setUser] = useState<UserProps | null>(null)
    const [repos, setRepos] = useState([{} as ReposProps])
    const [name, setName] = useState('')

    const [pagination, setPagination] = useState<Pagination | null>({} as Pagination)

    const [searchItem, setSearchItem] = useState<UserProps[] | null>(null)
    const {setHistory} = useHistoric()

    useEffect(() => {
        function loadStorageData(){
            const storageUser = sessionStorage.getItem('current_user')
            const storageRepos = sessionStorage.getItem('current_repos')
            if(storageUser ){
                setUser(JSON.parse(storageUser))
                storageRepos && setRepos(JSON.parse(storageRepos))
            }
        }
        loadStorageData()
    }, [])

    async function handlePage(value: string){
        const [{items, total_count}, page] = await changePage(value)
        
        setPagination(page)
        setSearchItem(total_count === 0 ? null : items)
    }
    
    async function handleSearch(name: string) {
        const [{items, total_count}, page] = await search(name)
        setPagination(page)
        setSearchItem(total_count === 0 ? null : items)
    }
    
    async function handleUser(name: string){
        sessionStorage.clear()
        setUser(null)
        setSearchItem(null)

        const data = await getUser(name)

        setUser(data)
        handleRepos(name)
        setHistory(data)
        
        sessionStorage.setItem('current_user', JSON.stringify(data))
    }

    async function handleRepos(name: string){
        const data = await getRepos(name)
        setRepos(data)
        sessionStorage.setItem('current_repos', JSON.stringify(data))     
    }

    function clearSessionStorage() {
        sessionStorage.clear()
        setUser(null)
        setSearchItem(null)
    }

    return(
        <Styled.LandingContainer className="container">
            <Styled.Header>
                <Link href="/"><img className="git" src="assets/image/git-icon.svg" alt="GitHub" onClick={clearSessionStorage}/></Link>
                <div>
                    <Link href="/historic"><img className="historic" src="assets/image/history.svg" alt="Histórico"/></Link>
                </div>
            </Styled.Header >
            <h1>Search on GitHub</h1>
    
            <Formik initialValues={{name: ''}} 
            validationSchema={Yup.object().shape({name: Yup.string().required()})}
            onSubmit={(values) =>{
                setSearchItem(null)
                setUser(null)
                setName(values.name)
                handleSearch(values.name)               
            }}
            >
                {formik => (
                    <Form>
                        <div>
                            <Styled.Fields id="name" name="name" type="text/submit" placeholder="Search by login" />
                            {formik.errors && <Styled.ErrorMsg component="span" name="name" />}
                        </div>
                    </Form>
                )}
            </Formik>
            {(searchItem && !user) && (
                <>
                <Styled.Search>
                    {searchItem.map((searchItem) => {
                        return(
                            <Styled.SearchItem key={searchItem.id}>
                                <button onClick={() =>{
                                    handleUser(searchItem.login)
                                }}>
                                <div className="searchItemContainer">
                                    <img src={searchItem.avatar_url} alt={searchItem.name} />
                                    <div>
                                        <strong>{searchItem.login}</strong>
                                    </div>
                                </div>
                                </button>
                            </Styled.SearchItem>
                        )
                    })}
                </Styled.Search>
                {pagination && (
                <Styled.Pagination className="searchFooter">
                    {pagination?.prev ? (
                        <button type="button" name="PREV" onClick={() => handlePage(pagination?.prev?.url)}>
                            <Styled.ArrowLeft/>
                        </button>
                    ) : (
                        <button disabled>
                            <Styled.ArrowLeft/>
                        </button>
                    )}
                    
                    {pagination?.first && (
                        <button onClick={() => handlePage(pagination?.first?.url)}>
                            1
                        </button>
                    )}
                    
                    <button style={{'textDecoration': 'underline'}}>
                        {pagination?.next ? pagination?.next?.numberPage - 1 : pagination?.prev?.numberPage + 1}
                    </button>

                    <button onClick={() => handlePage(pagination?.last?.url)}>
                        {pagination?.last?.numberPage ? pagination?.last.numberPage : pagination?.prev.numberPage + 1}
                    </button>

                    {pagination?.next ? (
                        <button type="button" name="NEXT" onClick={() => handlePage(pagination?.next?.url)}>
                            <Styled.ArrowRight/>
                        </button>
                    ) : (
                        <button disabled>
                            <Styled.ArrowRight/>
                        </button>
                    )}
                </Styled.Pagination>
                )}
                </>
            )}
            {user && (
                <main>
                    <Styled.Section key={user.id}>
                        <div className="headerSection">
                            <a href={user.html_url}>
                                <Styled.HeaderSection>
                                    <img src={user.avatar_url} alt={user.name}/>
                                    <div>
                                        <strong>{user.name}</strong>
                                        <span>{user.login}</span>
                                    </div>
                                </Styled.HeaderSection>
                            </a>
                            <Styled.Text>
                                {user.company && (
                                    <div>
                                        <strong>Companhia: </strong>
                                        <span>{user.company}</span>
                                    </div>
                                )}
                                {user.location && (
                                    <div>
                                        <strong>Local: </strong>
                                        <span>{user.location}</span>
                                    </div>
                                )}
                                {user.email && (
                                    <div>
                                        <strong>Email: </strong>
                                        <span>{user.email}</span>
                                    </div>
                                )}
                            </Styled.Text>
                        </div>
                        <div className="repositorioSection">
                            {repos.map((repos) => {
                                return (
                                    <a key={repos.id} href={repos.html_url}>
                                        <Styled.Repositorio>
                                            {repos.name && <h2>{repos.name}</h2>}
                                            {repos.description && <p>{repos.description}</p>}
                                            {repos.updated_at && (
                                                <span>Atualizado em {format(new Date(repos.updated_at), 'dd/MM/yyyy')}</span> 
                                            )}
                                            
                                        </Styled.Repositorio>
                                    </a>
                                )
                            })}
                        </div>  
                    </Styled.Section>
                </main>
            )}
        </Styled.LandingContainer>
    )
}
