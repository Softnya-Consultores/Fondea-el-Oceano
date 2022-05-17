
const categories = require("./../../app/model/Categories")
const db = require("./../../app/lib/DB");
db.connect();

describe(" test", () => {
    test("Test Order", async () => {
        
        const consulta = await categories.getAllCategories();
        expect(consulta[0].name).toBe("Coral reefs");
    });
     
    });
    
    