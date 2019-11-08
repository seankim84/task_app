require('../src/db/mongoose');
const Task = require('../src/models/Task');
const User = require('../src/models/User');

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({age})
    return count 
}

// updateAgeAndCount('5dc3a1bde5a79916fbb5adda', 2)
// .then(count => {
//     console.log(count)
// }).catch(err => console.log(err));

const deleteTaskAndCount = async (id) => {
    const task = await Task.findOneAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count;
} 

deleteTaskAndCount('5dc3925652dc7904b9188a3b')
.then(deleting => {
    console.log(deleting)
}).catch(e => console.log(e));