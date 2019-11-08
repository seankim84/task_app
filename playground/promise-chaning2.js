require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete( {
    _id: "5dc3b20e95744a1c207377d3"
})
.then(task => {
    console.log(task)
    return Task.countDocuments({completed: false})})
.then(result => {
    console.log(result)
}).catch(e => console.log(e));

