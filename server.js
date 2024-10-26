import express from 'express';
import initApiRoutes from '../backendN-cv/src/route/api.js'
require('dotenv').config();
const app = express();
// console.log(process.env)
// //INITIALIZE ROUTE
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('Hello World! Quốc Nhu')
})
initApiRoutes(app)

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});