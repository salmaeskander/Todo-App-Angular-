import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-add-todo',
  standalone: false,
  host: { class: 'd-flex flex-column gap-4 align-items-center justify-content-center mt-5' },
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class  AddTodoComponent {
    form = new FormGroup({ title: new FormControl(''),
    description: new FormControl(''),


    });

    todoservice = inject(TodoService);

    newItemAdded = output<void>();

  constructor(private todoService: TodoService) {}
  submit() {
    if(this.isNotValid()) return;
    if(this.form.value.title && this.form.value.description){
      this.todoService.addTodo(this.form.value.title, this.form.value.description) ;
      this.form.reset();
      
      this.newItemAdded.emit();
    }
  }
  isNotValid(){
    return !this.form.value.title || !this.form.value.description

  }

}
