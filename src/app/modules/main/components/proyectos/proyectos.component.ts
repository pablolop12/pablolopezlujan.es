import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: false,
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {

  showMore = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
