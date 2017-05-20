import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoTitle: string;
  @Input() todoItems: string[] = [];

  constructor() { 
  }

  ngOnInit() {
    // this.todoTitle = 'My todo list';
    
  }

}
