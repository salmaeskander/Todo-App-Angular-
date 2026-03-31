// import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../models/todo';
import { TodoService } from '../../../services/todo.service';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})

export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() refresh = new EventEmitter<void>();
   todoService = inject(TodoService);
 

  delete() {
    this.todoService.deleteTodo(this.todo.id).subscribe({
      complete: () => this.refresh.emit()
    });
  }

  toggle() {
    this.todoService.toggleTodo(this.todo).subscribe({
      complete: () => this.refresh.emit()
    });
  }
}
