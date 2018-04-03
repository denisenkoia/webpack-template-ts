import 'babel-polyfill';


interface User {
    name: string,
    admin: boolean,
    password?: number
}

let admin: User = {
    name: 'test',
    admin: true,
    password: 1111
}
