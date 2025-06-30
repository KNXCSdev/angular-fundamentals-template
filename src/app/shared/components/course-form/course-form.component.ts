import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
})
export class CourseFormComponent implements OnInit {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
  courseForm!: FormGroup;
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
  submitted: boolean = false;

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.courseForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(2)]],
      duration: ["", [Validators.required, Validators.min(0)]],
      authors: this.fb.array([]),
      courseAuthors: this.fb.array([]),
      newAuthor: this.fb.group({
        author: ["", [Validators.pattern(/^[a-zA-Z0-9 ]+$/), Validators.minLength(2)]],
      }),
    });
  }

  get authors(): FormArray {
    return this?.courseForm?.get("authors") as FormArray;
  }

  get courseAuthors(): FormArray {
    return this?.courseForm?.get("courseAuthors") as FormArray;
  }

  get newAuthorControl(): AbstractControl | null {
    return this?.courseForm?.get("newAuthor.author");
  }

  get duration(): number {
    return this?.courseForm?.get("duration")?.value;
  }

  addCourseAuthor(author: { id: string; name: string }, index: number): void {
    this.courseAuthors.push(this.fb.control(author));
    this.authors.removeAt(index);
  }

  deleteCourseAuthor(index: number): void {
    const author = this.courseAuthors.at(index).value;
    this.authors.push(this.fb.control(author));
    this.courseAuthors.removeAt(index);
  }

  deleteAuthor(index: number): void {
    this.authors.removeAt(index);
  }

  createAuthor(): void {
    const name = this.newAuthorControl?.value.trim();

    if (!this.newAuthorControl?.valid || !name) return;

    const newAuthor = {
      id: Date.now().toString(),
      name,
    };

    this.authors.push(this.fb.control(newAuthor));
    this.newAuthorControl?.reset();
  }

  onSubmit() {
    this.submitted = true;
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    console.log("Submitted data:", this.courseForm.value);
  }
}
