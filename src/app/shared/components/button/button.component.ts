import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas, IconName } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  // Use the names for the inputs `buttonText` and `iconName`.
  @Input() buttonText?: string;
  @Input() iconName?: IconName;
  @Input() type: "button" | "submit" = "button";

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
