import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[] = [];
  todoText = '';

  ngOnInit() {
    const exisitngTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(exisitngTodos as string) || [];
  }

  addTodo() {
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
