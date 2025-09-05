

const user = {
    alex: {
        name: 'Alex',
        age: 24,
        isAdmin: false
    },
    jhon: {
        name: 'Jhon',
        age: 25,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello${name}`)
        }
    }

}

console.log(user.alex)

user.jhon.sayHello(' Tom')



const users = [
    {
        name: 'Alex',
        age: 24,
        isAdmin: false
    },
    {
        name: 'Jhon',
        age: 25,
        isAdmin: true,
    },
    {
        name: 'Ivan',
        age: 28,
        isAdmin: false,
    },
    {
        name: 'Artur',
        age: 25,
        isAdmin: false,
    },
]

let normalUsers = null

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        normalUsers++
    }
}

console.log(`Number of normal users ${normalUsers}`)