import { Component, OnInit } from '@angular/core';
import { todoConst } from './todo-list.constant';
import { TodoService } from '../../services/todo.service';
import { map, mergeMap} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router} from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  editedTask: any;
  searchText: string;
  edittaskTitle: any;
  edittaskDetails: any;
  p: number = 1;

  constructor(private todoService : TodoService,private modalService: NgbModal, private router:Router) { }
  todoConst = todoConst;
  todoList;
  newTask;
  taskTitle;
  taskDetails;
  ngOnInit() {
    this.todoService.getTodoList().subscribe((data:any) => {
      this.todoList = data;
    });
  }

  addTask(){
    if(this.taskTitle && this.taskDetails && this.taskTitle.trim() != '' && this.taskDetails.trim() != ''){
      let obj ={
        "title":this.taskTitle,
        "text":this.taskDetails
      }
      this.todoService.addItem(obj).pipe(mergeMap(task => this.todoService.getTodoList())).subscribe(data=>{
        this.todoList = data;
        this.taskTitle='';
        this.taskDetails='';
      },
      (err)=>{
        alert(err);
        this.taskTitle='';
        this.taskDetails='';
      })
    }
    else{
      alert('please enter value');
    }
  }

  onChangeValue(event) {
    this.searchText = (<HTMLInputElement>event.target).value;
  }

  navigateToOverview(){
    this.router.navigateByUrl('/overview');
  }

  deleteTask(event,items){
    console.log(event);
    console.log(items);
    this.todoService.deleteTask(items.id).pipe(mergeMap(task => this.todoService.getTodoList())).subscribe(data=>{
      this.todoList = data;
      this.taskTitle='';
      this.taskDetails='';
    },
    (err)=>{
      console.log(err);
      this.taskTitle='';
      this.taskDetails='';
    })
  }
  open(content,items) {
    this.editedTask = items;
    this.edittaskTitle=items.title;
    this.edittaskDetails=items.text;
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

  saveEdit(){
    let obj ={
      "title":this.edittaskTitle,
      "text":this.edittaskDetails
    }
    this.todoService.updateItem(this.editedTask.id,obj).pipe(mergeMap(task => this.todoService.getTodoList())).subscribe(data=>{
      this.todoList = data;
    },
    (err)=>{
      console.log(err);
    })
  }

}
