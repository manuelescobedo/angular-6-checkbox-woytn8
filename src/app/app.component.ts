import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  list = [1, 2, 3, 4, 5];

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array(
        this.buildItems()
      )
    });
  }

  buildItems() {
    return new Array(this.list.length).fill(0)
  }

  constructor(private fb: FormBuilder) {}

  get items(): FormArray {
    return this.form.get("items") as FormArray;
  }

  get selectedItems() {
    return this.list.filter((item, index) => !!this.items.at(index).value)
  }
}
