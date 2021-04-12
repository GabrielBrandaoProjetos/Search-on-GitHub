import Dexie from 'dexie';

const db = new Dexie('History');
db.version(0.1).stores({
    users: '++id, login'
});

export async function saveHistory(user){
    const countList = await db.users.count()
    const list = await db.users.toArray().then((users) => {return users})
    
    if(countList === 5){
        let menorUser = list[0].id 
        list.forEach((user) => {
            if(user.id < menorUser){
                menorUser = user.id
            }
        })
      await db.users.delete(menorUser)

    }
    await db.users.add({
        name: user.name,
        login: user.login,
        public_repos: user.public_repos,
        followers: user.followers,
        avatar_url: user.avatar_url,
        following: user.following,
    })
}

export async function getHistory(){
    const list = await db.users.toArray().then((users) => {return users})
    
    return list
}

export default db;