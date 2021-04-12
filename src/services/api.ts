import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
})

export async function getUser(name: string){
    const {data} = await api.get(`users/${name}`)
    return data
}

export async function getRepos(name: string){
    const {data} = await api.get(`users/${name}/repos?sort=updated`)
    return data
}

export async function search(name: string){
    const {headers, data} = await api.get(`search/users?q=${name}`)
    
    const pagination = handlePagination(headers)

    return [data, pagination]
}

export async function changePage(url: string){
    const {headers, data} = await api.get(url)

    const pagination = handlePagination(headers)

    return [data, pagination]
    
}


function handlePagination(headers: string){
    const page = String(headers.link).split(',')

    const paginationList = page.map((page) => {
        const name = page.split(';')[1].match(/(prev)|(next)|(last)|(first)/)[0]
    
        const url = page.split(';')[0].replace('<', '').replace('>', '').replace(' ', '')

        const numberPage = parseInt(url.match(/(?<=page=)(\d+)/)[0])
        
        switch (name) {
            case 'prev':
                return {prev: {url, numberPage}}
                break
            case 'next':
                return {next: {url, numberPage}}
                break
            case 'last':
                return {last: {url, numberPage}}
                break
            case 'first':
                return {first: {url, numberPage}}
                break
        }
    })

    const pagination = paginationList.reduce((object, item) => ((Object.assign(item, object))), {})
    
    return pagination
}

export default api