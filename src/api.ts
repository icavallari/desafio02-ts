export interface User {
    password: string;
    email: string;
    name: string;
  }

const conta = {
    email: 'icavallari@hotmail.com',
    password: '123456',
    name: 'rodrigo'
}

export const api = new Promise(resolve => {
    setTimeout(() => {
        resolve(conta)
    }, 1500);
})