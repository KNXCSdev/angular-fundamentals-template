import { Component, EventEmitter, Input, Output } from "@angular/core";

interface Course {
  title: string;
  description: string;
  id: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

@Component({
  selector: "app-courses-list[courses]",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.css"],
})
export class CoursesListComponent {
  @Input() courses!: Course[];
  @Input() editable = false;

  @Output() showCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();

  onShow(course: Course) {
    this.showCourse.emit(course);
  }

  onEdit(course: Course) {
    this.editCourse.emit(course);
  }

  onDelete(course: Course) {
    this.deleteCourse.emit(course);
  }
}
