
const categories = require("./../../app/model/Categories")


describe(" test", () => {
    test("Test Order", async () => {
        
        const consulta = await categories.getAllCategories();
        expect(consulta[0].name).toBe("Coral reefs");
        
    });
    });
    
    