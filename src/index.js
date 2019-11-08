const express = require('express');
require('./db/mongoose'); // 불러오는것 만으로도 몽구스가 실행
const User = require('./models/user');
const Task =  require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
    
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch(e) {
        res.status(500).send(e)
    } 
    // User.find({}).then(users => {
    //     res.status(200).send(users)
    // }).catch(e => {
    //     res.status(500).send(e)
    // });
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if(!user._id){
            return res.status(400).send();
        }
        res.send(user);
    } catch(e) {
        res.status(500).send(e);
    }
    // User.findById(_id).then(user => {
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     return res.send(user);
    // }).catch(e => {
    //     res.status(500).send(e)
    // })
})

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save()
        res.status(201).send(user) 
    } catch(e) {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
});

app.get('/tasks', async (req, res) => {
    
    try {   
        const task = await Task.find();
        res.status(200).send(task)
    } catch(e){
        res.status(500).send(e)
    }
    // Task.find({}).then((task) => {
        // res.status(200).send(task)
    // }).catch(e => res.status(400).send(e))
});

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if(!task._id){
            return res.status(400).send()
        }
        res.send(task)
    } catch(e){
        res.status(500).send(e)
    }
    
    // Task.findById(_id).then((task) => {
    //     if(!task_id){
    //         return res.status(400).send()
    //     }
    //     res.status(200).send(task)
    // }).catch(e => res.status(500).send(e));
})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).send(task);
    } catch(e){
        res.status(400).send(e)
    }
    // task.status(201).save().then(() => {
    //     res.send(task)
    // }).catch(e => {
    //     res.status(400).send(e) 
    // })
})



app.listen(port, () => {
    console.log('Server is up on port:' + port);
})