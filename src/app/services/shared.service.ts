import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // todolist: any[] = [];
  // this is todoList 
  private todoList = new BehaviorSubject<any[]>([]);
  // this is my observable object, where all components can see the todo list
  todoList$ = this.todoList.asObservable();

  constructor() { 
    this.refreshTodoList();
  }

  refreshTodoList(): void {
    this.todoList.next(this.getTodoList());

  }

  getTodoList(): any {
    const temp = localStorage.getItem('todoList')
    return temp ? JSON.parse(temp) : [];
  }
  addTodoList(todo: any): string {
    localStorage.setItem("todoList", JSON.stringify(todo))
    return 'to-do added successfully';
  }
}
