import { urlValidiation } from "../src/client/js/urlChecker";
describe("Testing URL validation functionality", () => {
  test("Is urlValidiation defined", () => {
    expect(urlValidiation).toBeDefined();
  });

  test("Does valid URL return true", () => {
    expect(urlValidiation("https://translate.google.com.eg/")).toBeTruthy();
  });

  test("Making sure an invalid URL returns false", () => {
    expect(urlValidiation("amory")).toBeFalsy();
  });
});