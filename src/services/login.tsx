import { User, api } from "../api";

interface ILoginResponse {
  success: boolean,
  message: string,
  user?: User
}

export const login = async (email: string, senha: string): Promise<ILoginResponse> => {
  
  if (!email || !senha || !email.trim() || !senha.trim()) {
    return {
      success: false,
      message: 'E-mail e senha devem ser informados'
    };
  }

  if (email.indexOf('@') <= 0) {
    return {
      success: false,
      message: 'Informe um e-mail válido'
    };
  }  

  if (!email.endsWith('.com.br')) {
    return {
      success: false,
      message: 'O e-mail deve terminar em (.com.br)'
    };
  }

  if (senha.length < 6) {
    return {
      success: false,
      message: 'A senha deve contar mais de 5 caracteres'
    };
  }

  const data = await api(email, senha);

  return {
    user: data,
    success: true,    
    message: ''
  };

};
