import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const diobank = {
    login: false
}

describe('storage', () => {

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    
    it('Deve retornar o objeto', () => {
        
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')

    })

    it('Deve criar objeto localstorage', () => {
        
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))

    })

    it('Deve alterar o valor do objeto no localstorage', () =>{

        changeLocalStorage({
            password: '123456',
            email: 'icavallari@hotmail.com.br',
            name: 'rodrigo',
            balance: 2200,
            id: '1'
        })
        expect(mockSetItem).toBeCalledWith('diobank', JSON.stringify(diobank))

    })

})