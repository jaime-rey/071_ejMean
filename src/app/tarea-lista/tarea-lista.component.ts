import { Component, OnInit } from '@angular/core';
import { TareaModel } from '../shared/tarea.nodel';
import { Observable } from 'rxjs';
import { TareaService } from '../shared/tarea.service';

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css'],
})
export class TareaListaComponent implements OnInit {
  tareas!: Observable<TareaModel[]>;
  constructor(private tareaService: TareaService) {}
  ngOnInit() {
    this.tareas = this.tareaService.getAllTareas();
  }
}
