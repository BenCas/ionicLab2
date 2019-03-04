import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage {

  courseModel : Course = new Course();

  constructor (private dataSrv : DataService){

  }

  registerCourse(){
    this.dataSrv.saveCourse(this.courseModel);
    console.log("start the save");

    this.courseModel = new Course();
  }

}
