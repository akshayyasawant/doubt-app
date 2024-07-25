const express=require("express");
const cors=require("cors");
const {MongoClient}=require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
	const url="mongodb://0.0.0.0:27017";
	const client=new MongoClient(url);
	const db=client.db("doubt25july24");
	const coll=db.collection("student");
	const record={"name":req.body.name,"doubt":req.body.doubt};
	coll.insertOne(record)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
});
app.listen(9999,()=>{console.log("ready to serve @9999");});