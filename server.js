// importation of the application
const app = require("./backend/app");
// app is listening to the requests on PORT 3000
app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});