const express = require("express");
const cors = require("cors");
const port = 8000;

require("./config/mongoose.config");
const app = express();

app.use(cors());

app.use(express.json(), express.urlencoded({extended: true}));

require("./routes/user.routes")(app)


const colors = require('colors');
app.listen(port, () => 
    console.log(colors.bgCyan(`Listening on port ${port} for requests to respond to.`)
));



