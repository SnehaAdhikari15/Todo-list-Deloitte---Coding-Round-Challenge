import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  searchText: string;
  todoList;
  p: number = 1;

  constructor(private todoService : TodoService,private router:Router) { }

  ngOnInit() {
    this.todoService.getTodoList().subscribe((data:any) => {
      this.todoList = data;
    });
  }

  onChangeValue(event) {
    this.searchText = (<HTMLInputElement>event.target).value;
  }

  navigateToEdit(){
    this.router.navigateByUrl('/todo');
  }
}
