import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.infoData.status);
  }

  info = this.fb.group({
    infoData: this.fb.array([])
  })

  get infoData() : FormArray{
     return this.info.controls["infoData"] as FormArray;
  }
  
  addData() {
    const infoDataForm = this.fb.group({
      fname : ["", Validators.required],
      lname: ["", Validators.required],
      age:["",Validators.required] 
    })
    this.infoData.push(infoDataForm);
  }

  removeInfo(i:number) {
    this.infoData.removeAt(i);
  }
}
