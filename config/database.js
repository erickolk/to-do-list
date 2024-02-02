const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
// db.once('open', () => {
//   console.log('Conectado ao MongoDB');
// });

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/todo-list')
    .then(()=> console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err))
