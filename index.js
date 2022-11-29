
 const express= require('express')
 const cors= require('cors')
 
 const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
 require('dotenv').config();
 const app = express();

 const port = process.env.PORT || 5000;

 //middlewire
 app.use(cors());
 app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.cno8kmu.mongodb.net/?retryWrites=true&w=majority`;

// console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
   try{
      const resaleCategory = client.db('furnitureCategory')
      // const furnitureCollection= resaleCategory.collection('allFurnitureCategory');
      
      // app.get('/category',async(req,res)=>{
      //    const query = {};
      //    const category = await furnitureCollection.find(query).toArray();
      //    res.send(category);
     
         const sittingCollection= resaleCategory.collection('sittingCollection');
      // const resaleCategory = client.db('furnitureCategory').collection('sittingCollection');
      
      app.get('/sitting',async(req,res)=>{
         const query = {};
         const sittingCollections = await sittingCollection.find(query).toArray();
         res.send(sittingCollections);
     
          })
      //      app.get('/sitting/:id', async(req, res) => {
      //       const id= req.params.id;
      //       console.log(id)
      //       const query = { _id: ObjectId(id) };
      //        const sittingCollections2 = await resaleCategory.findOne(query);
      //        res.send(sittingCollections2);
     
      // })
   }

   finally{

   }
}

run().catch(console.log)

 app.get('/', (req,res) => {
    res.send('API is calling from resale server')
 })
 
 app.listen(port, () => {
    console.log(`Api is running on ${port} from resale server`)
 })