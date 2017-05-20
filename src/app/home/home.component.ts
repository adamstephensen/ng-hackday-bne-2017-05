import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTodoTitle: string;
  homeTodoItems: string[];

  workTodoTitle: string;
  workTodoItems: string[];

  constructor() {
    this.workTodoItems = ['learn ionic', 'learn angular'];
  }

  ngOnInit() {
    this.homeTodoTitle = 'My home todo list';
    this.homeTodoItems = ['buy milk', 'learn to bake a flan'];

    this.workTodoTitle = 'My work todo list';
    this.workTodoItems = ['buy milk', 'learn to bake a flan'];

  }

}
