const app = require("./app.js");

const PORT =  process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})