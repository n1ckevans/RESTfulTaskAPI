import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Restful Tasks API';
  tasks: any[] = [];
  selectedTask = null;
  newTask: any;
  

  constructor(
    private _httpService: HttpService
    ) { }

  ngOnInit() {
    this.newTask = {
      title: '',
      description: '',
      completed: false,
    };
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['tasks']
    });
  }

  selectTask(task) {
    this.selectedTask = task;
    console.log(this.selectedTask);
    return this.selectedTask;
   
  }

  edit(task){
    
    let observable = this._httpService.updateTask(task._id, task);
    observable.subscribe( data => {
      console.log("Successfully updated!", data); 
      this.selectedTask = null;     
  })
}

  delete(task) {
    console.log(task._id);
    let observable = this._httpService.deleteTask(task._id);
    observable.subscribe(data => {
      console.log("Deleted this shit", data);
      return this.getTasksFromService();
    })
  }

  create() {
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log(data);
      this.tasks.push(this.newTask);
        this.newTask = {
          title: '',
          description: '',
          completed: false,
        }
      })
  }
}