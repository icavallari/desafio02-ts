import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "icavallari@hotmail.com";

  it("Deve exibir um alert caso email seja valido", async () => {
    const data = await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`);
  });

  it("Deve exibir erro caso email seja invalido", async () => {
    const data = await login("email@invalido");
    expect(mockAlert).toHaveBeenCalledWith("E-mail inválido!");
  });
});
