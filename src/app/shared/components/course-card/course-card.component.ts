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
  selector: "app-course-card[course]",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent {
  @Input() course!: Course;

  @Input() editable: boolean = false;

  @Output() clickOnShow = new EventEmitter<void>();

  onShowClick() {
    this.clickOnShow.emit();
  }
}
