const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/todo-list')
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.log(err))

