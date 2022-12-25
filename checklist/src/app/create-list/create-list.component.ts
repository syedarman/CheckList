import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    items :  this.formBuilder.array([this.getItem()], Validators.required)
  });
  
  items(){
    return this.form.get("items") as FormArray;
  }

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

  removeItem(itemIndex : number){
    this.items().removeAt(itemIndex);
  } 

}
