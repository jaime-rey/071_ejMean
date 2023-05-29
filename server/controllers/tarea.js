
let mongoose = require('mongoose');
let Tarea = require('../models/tarea');

exports.list_all_tareas = function (req, res) {
  Tarea.find().then((err, result) => {
    console.log("lista de tareas")
    if (err) {
      res.send(err)
    }
    res.send(result)
  }).catch(error => console.log(error));
};

exports.create_tarea = function (req, res) {
  let new_tarea = new Tarea(req.body);
  new_tarea.save().then((err, result) => {
    console.log("nueva tarea")
    if (err) {
      res.send(err)
    }
    res.send(result)
  }).catch(error => console.log(error));
};

exports.read_tarea = function (req, res) {
  Tarea.findById(req.params.tareaId).then((err, result) => {
    console.log("leer tarea")
    if (err) {
      res.send(err)
    }
    res.send(result)
  }).catch(error => console.log(error));
};

exports.update_tarea = function (req, res) {
  Tarea.findOneAndUpdate({ _id: req.params.tareaId }, req.body, { new: true }, function (err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
  }).catch(error => console.log(error));
};

exports.delete_tarea = function (req, res) {
  Tarea.findOneAndDelete({ _id: req.params.tareaId }).then(function () {
    console.log(req.params.tareaId);
    console.log("Data deleted"); // Success
  }).catch(function (error) {
    console.log(error); // Failure
  });
};
