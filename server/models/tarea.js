let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let tareaSchema = new Schema({
  titulo: {
    type: String,
    Required: 'El campo titulo es obligatorio.'
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
