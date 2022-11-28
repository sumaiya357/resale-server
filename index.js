
 const express= require('express')
 const cors= require('cors')

 const app = express();

 const port = process.env.PORT || 5000;

 //middlewire
 app.use(cors());
 app.use(express.json())


 app.get('/', (req,res) => {
    res.send('API is calling from server')
 })
 
 app.listen(port, () => {
    console.log(`Api is running on ${port}`)
 })