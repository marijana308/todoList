import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  ngOnInit() {
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  clearTodos() {
    this.todos.length = 0;
  }

  addTodo(todo: Todo) {
    // tslint:disable-next-line: no-shadowed-variable
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo));
  }
}
