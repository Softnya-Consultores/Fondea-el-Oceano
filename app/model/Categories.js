const db = require("./../lib/DB");

class Categories {
    static getAllCategories() {
        return db.loadAssocList(`
            SELECT * FROM categories
            WHERE published = 1
            ORDER BY name
        `);
    }
}

module.exports = Categories;