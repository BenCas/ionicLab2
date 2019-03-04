import { Component } from '@angular/core';
import { Student } from '../student';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  studentModel : Student = new Student();

  constructor(private dataSrv : DataService){

  }

  registerStudent(){
    console.log(this.studentModel);
    this.dataSrv.saveStudent(this.studentModel);

    //clear data after user registers
    this.studentModel = new Student();
  }
}
