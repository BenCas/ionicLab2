import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage{

  allStudents : Student[] = [];
  
  constructor(private dataSrv : DataService) {
    
    //get the data from the service
    dataSrv.getStudents().subscribe(res => {
      this.allStudents = res;
    });

  }
  showDetails(selStudent : Student){
    if(selStudent.Courses){
      selStudent.Courses = [];
    }
    selStudent.Courses.push("123")
    this.dataSrv.updateStudent(selStudent);
  }
}


