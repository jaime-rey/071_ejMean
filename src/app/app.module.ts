import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';
import { TareaService } from './shared/tarea.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'tareas', component: TareaListaComponent },
  { path: 'tareas/:id/edit', component: EditTareaComponent },
  { path: 'tareas/new', component: EditTareaComponent },
  { path: '**', redirectTo: '/tareas', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [TareaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
