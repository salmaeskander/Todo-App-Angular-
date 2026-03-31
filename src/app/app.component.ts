import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
   host: {
    'class': 'bg-light min-vh-100 d-flex flex-column align-items-center justify-content-start'
   }
  })
export class AppComponent {
  isCreatTodo = true;
  protected readonly title = signal('todo-app');
}
