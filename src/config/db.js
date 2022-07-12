//  connecting server to the database 
const mongoose = require("mongoose");

const url = `mongodb://localhost:27017/myapp`

module.exports = () => {
    return mongoose.connect(url);
};

// database connected 