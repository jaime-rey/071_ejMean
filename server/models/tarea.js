
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let tareaSchema = new Schema({
  titulo: {
    type: String,
    default: "nueva tarea"
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: [{
      type: String,
      enum: ['Por hacer', 'En progreso', 'Hecha']
    }],
    default: ['Por hacer']
  }
});

module.exports = mongoose.model('Tarea', tareaSchema);
