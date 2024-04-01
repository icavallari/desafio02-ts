export interface User {
    password: string;
    email: string;
    name: string;
    balance: number;
    id: string;
  }

const conta : User = {
    email: 'icavallari@hotmail.com',
    password: '123456',
    name: 'rodrigo',
    balance: 2500,
    id: '1'
}

export const api = new Promise(resolve => {
    setTimeout(() => {
        resolve(conta)
    }, 1500);
})