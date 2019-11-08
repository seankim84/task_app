const express = require('express');
require('./db/mongoose'); // 불러오는것 만으로도 몽구스가 실행
const User = require('./models/user');
const Task =  require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
    
app.get('/users', (req, res) => {
    User.find({}).then(users => {
        res.status(200).send(users)
    }).catch(e => {
        res.status(500).send(e)
    });
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;

    User.findById(_id).then(user => {
        if(!user){
            return res.status(404).send()
        }
        return res.send(user);
    }).catch(e => {
        res.status(500).send(e)
    })
})

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

app.get('/tasks', (req, res) => {
    Task.find({}).then((task) => {
        res.status(200).send(task)
    }).catch(e => res.status(400).send(e))
});

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then((task) => {
        if(!task_id){
            return res.status(400).send()
        }
        res.status(200).send(task)
    }).catch(e => res.status(500).send(e));
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.status(201).save().then(() => {
        res.send(task)
    }).catch(e => {
        res.status(400).send(e) 
    })
})

app.listen(port, () => {
    console.log('Server is up on port:' + port);
})