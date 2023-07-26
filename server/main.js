const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const client = new MongoClient("mongodb+srv://JoeYoussef:123456789joe@userid.rp7bdqp.mongodb.net/Food?retryWrites=true&w=majority");

const server = express();
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended : true }));
server.use(cors());

var collection;

server.get('/search' ,async (req ,res) => {
    try {
        let result = await collection.aggregate([
            {
                "$search" : {
                    "autocomplete" : {
                        "query" : `${req.query.term}`,
                        "path" : "name",
                        "fuzzy" : {
                            "maxEdits" : 2
                        }
                    }
                }
            }
        ]).toArray();
        res.send(result);
    } catch (e) {
        res.status(500).send({ message : e.message});
    }
});

server.listen("3000" ,async () => {
    try {
        await client.connect();
        collection = client.db("Food").collection("FoodRecipe");
    } catch (e) {
        console.log(e);
    }
})