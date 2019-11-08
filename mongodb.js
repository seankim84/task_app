// CRUD create read update delete



const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27018';
const databaseName =  'task-manager';

// const id = new ObjectID()
// console.log(id.id);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(
    connectionURL, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (error, client) => {

    if(error){
        console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)
    
    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then(result => {
        console.log(result)
    }).catch(err => console.log(err));

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then(result => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5dc27de4805a6a400c4e814c')
    // }, { $inc: { age:  1 }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    
    // db.collection('users').findOne({
    //             _id: new ObjectID('5dc27de4805a6a400c4e814c')
    //         }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(result)
    // });

    // db.collection('users').find({
    //     age: 29
    // }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('tasks').find({completed: false}).toArray((error, complete) => {
    //     console.log(complete);
    // }); 

    //db.collection('users').insertOne({
    //    _id: id,
    //    name: "Sean",
    //    age: 27 
    //}, (error, result) => {
    //    if(error){
    //        return console.log(error)
    //    } 
    //    console.log(result.ops)
    //})

    // db.collection('users').insertMany([
    //     {name: 'Jeny', age: 18},
    //     {name : 'Rebekah', age: 30}
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unalbe to find to insert User')
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {description: 'Clean the house', completed: true},
    //     {description: 'Refactoring', completed: false},
    //     {description: 'dedication for studying', completed: true},
    // ], (err, result) => {
    //     if(err){
    //         return console.log('Unable this tasks')
    //     } 
    //     console.log(result.ops)
    // })
});
