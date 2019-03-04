import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.page.html',
  styleUrls: ['./list-courses.page.scss'],
})
export class ListCoursesPage{

  allCourses : Course[] = [];
  
  constructor(private dataSrv : DataService) { 

    dataSrv.getCourses().subscribe(res =>{
      console.log(res);
      this.allCourses = res;
    });
  }
  }

