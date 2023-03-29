import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from '../course/course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnChanges {
  Courses = new Array<Course>();
  @Input() searchTerm:string = "";
  public courseFond = new Course;
  
  ngOnChanges(changes:SimpleChanges) {
    if (changes["searchTerm"]) {
      this.onSearchChange();
    }
  }


  constructor(){
    GenerateEmployes(this.Courses);
  }

  public single(id:number):Course{
    
    return this.Courses[id];
  }

  public  onSearchChange(){
      this .courseFond = this.single(parseInt(this.searchTerm));
      console.log("onSearchChange");
  }
  // single = this.Courses[5];
  
}

function GenerateEmployes( Courses:Array<Course>){
  for (let i = 0; i <10; i++) {
    Courses.push(new Course("Islamyat",`Umar${i}`));
   
  }
}