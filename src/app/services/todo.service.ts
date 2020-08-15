import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from "rxjs/internal/operators";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  baseURL = environment.baseUrl;

  getTodoList(){
    return this.http.get(this.baseURL + '/todos');
  }

  addItem(data) {
    return this.http.post(this.baseURL + '/todos',data)
  }

  deleteTask(id){
    return this.http.delete(this.baseURL + '/todos/'+id)
  }

  updateItem(id,data) {
    return this.http.put(this.baseURL + '/todos/'+id,data)
  }
}
