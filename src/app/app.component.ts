import { Component } from "@angular/core";
import { mockedCoursesList } from "./shared/mocks/mocks";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "courses-app";
  courses = mockedCoursesList;

  //Mock Data
  selectedCourse = mockedCoursesList[0];
  loggedIn = true;

  handleShow(course: any) {
    console.log("Course shown:", course);
  }

  handleEdit(course: any) {
    console.log("Course edit clicked:", course);
  }

  handleDelete(course: any) {
    console.log("Course delete clicked:", course);
  }
}
