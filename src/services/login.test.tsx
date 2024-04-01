import { login } from "./login";

describe("login", () => {

  const mockEmail = "icavallari@hotmail.com";

  it("Deve exibir um alert caso email seja valido", async () => {
    const response = await login(mockEmail);
    expect(response).toBeTruthy();
  });

  it("Deve exibir erro caso email seja invalido", async () => {
    const response = await login("email@invalido");
    expect(response).toBeFalsy();
  });
  
});
