const Recipes = require("./Recipes")
// @ponicode
describe("getRecipes", () => {
    let inst

    beforeEach(() => {
        inst = new Recipes.default()
    })

    test("0", async () => {
        await inst.getRecipes()
    })
})
