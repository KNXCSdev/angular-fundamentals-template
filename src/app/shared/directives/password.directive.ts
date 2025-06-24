import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[togglePassword]",
  exportAs: "togglePassword",
})
export class TogglePasswordDirective {
  private isHidden = true;

  @HostBinding("attr.type") get inputType() {
    return this.isHidden ? "password" : "text";
  }

  toggle(): void {
    this.isHidden = !this.isHidden;
  }

  get hidden(): boolean {
    return this.isHidden;
  }
}
