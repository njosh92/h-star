
const mongoose = require("mongoose");
const DB="Hoshi";

mongoose.connect("mongodb://localhost/"+ DB,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=> console.log(`connected to mongodb ${DB} database`)).catch( err=> console.log(`error connecting to ${DB} database `,err))