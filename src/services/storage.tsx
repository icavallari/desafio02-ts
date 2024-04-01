import { User } from "../api"

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', '')
}

export const changeLocalStorage = (object?: User) => {
    if(object === null || object === undefined){
        localStorage.setItem('diobank', '')
    } else {
        localStorage.setItem('diobank', JSON.stringify(object))
    }
}