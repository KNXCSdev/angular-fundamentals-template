import { Component } from "@angular/core";
import { mockedCoursesList } from "@app/shared/mocks/mocks";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent {
  courses = mockedCoursesList;
}
