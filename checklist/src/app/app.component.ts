import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder : FormBuilder){}
  form = this.formBuilder.group({
    items :  this.formBuilder.array([this.getItem()], Validators.required)
  });
  

  addItems(){
    this.form.controls.items.push(this.getItem());
  }

  getItem(){
    return this.formBuilder.group({
      name:[null, Validators.required],
      quantity:[null, Validators.required],
      unit:[null, Validators.required]
    })
  }

  saveItems(){
    console.log(this.form.value);
  }
}
