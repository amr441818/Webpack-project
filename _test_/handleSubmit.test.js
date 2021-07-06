import { handleSubmit } from "../src/client/js/formHandler";
describe("Testing submition", () => {
  test("is handleSubmit defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});