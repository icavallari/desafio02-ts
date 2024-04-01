import { login } from "./login";

describe("login", () => {

  it("Deve exibir um alert caso email seja valido", async () => {
    const response = await login('icavallari@hotmail.com.br', '123456');
    expect(response.success).toBeTruthy();
  });

  it("Deve exibir erro caso email seja invalido", async () => {
    const response = await login('icavallari@hotmail.com', '1234567');
    expect(response.success).toBeFalsy();
  });
  
});
