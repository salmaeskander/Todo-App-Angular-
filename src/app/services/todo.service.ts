import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _mylist: Todo[] = [];
  private http = inject(HttpClient);



  get mylist() {
    return this._mylist;
  }
  getTodoList() {
  return this.http.get<Todo[]>('http://localhost:3000/todoList');
}

//  getTodoList(isNewItemAdded = false) {
//   if(this._mylist.length && !isNewItemAdded) return;


//   this.http.get<Todo[]>(this.apiUrl).subscribe({
//     next: (list) => {
//       this._mylist = list;

//     },
//   });
// }

  // addTodo(title: string, description: string) {
  //   const newItem: Todo = {
  //     id: Date.now(),
  //     title,
  //     description,
  //     completed: false,
  //     date: new Date()
  //   };
  //   // this._mylist.push(newItem);
  //   this.http.post('http://localhost:3000/todoList', newItem).subscribe({complete: () => {
  //     this._mylist.push(newItem);}

  //   });
  // }



addTodo(title: string, description: string) {
  const id = (Math.random() *new Date().getTime()).toString();
    const newItem: Todo = {
      id,
      title,
      description,
      completed: false,

    };
    // this._mylist.push(newItem);

    return this.http.post('http://localhost:3000/todoList',newItem).subscribe({complete: () => {
      this._mylist.push(newItem);
    }});

  } 
   deleteTodo(id: string) {
  return this.http.delete(`http://localhost:3000/todoList/${id}`);
}

toggleTodo(todo: Todo) {
  return this.http.put<Todo>(`http://localhost:3000/todoList/${todo.id}`, {
    ...todo,
    completed: !todo.completed
  });
}
  }

