import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
    // this.createTask({
    //   "title": "No matter how you pronouce La Croix",
    //   "description": "You sound stupid"
    // });
  //   this.getTaskById("5dc9d2147d684931d438ea06");
  //    this.updateTask("5dc9d2147d684931d438ea06", {
  //   "title": "WHAT IT DO",
  //   "description": "MAYNE"
  // });
    // this.deleteTask("5dc9d5b6b589cc32b7df5f91");
    // this.getTasks();
  }

  

  getTasks() {
    // our http response is an Observable, store it in a variable
    // observable.subscribe(data => console.log("Got our tasks!", data));
    // return observable;
    return this._http.get('/api/tasks');

  }

  getTaskById(id: string) {
    this._http.get('/api/tasks/' + id)
      .subscribe(data => console.log(data))
  }

  createTask(newTask) {
    return this._http.post('/api/tasks/', newTask);
  }

  deleteTask(id: string) {
    return this._http.delete('/api/tasks/' + id);
  }

  updateTask(id: string, task: object) {
    return this._http.put('/api/tasks/' + id, task);

  }


}