export interface User {
    password: string;
    email: string;
    name: string;
    balance: number;
    id: string;
}

export const api = (email: string, senha: string) => new Promise<User>(resolve => {
    setTimeout(() => {

        const name = email.split('@')[0]
        resolve({

            email: email,
            password: senha,
            name: name,
            balance: 2500,
            id: '1'

        } as User)
    }, 1500);
})