import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId:string | undefined;
  DepartmentName:string | undefined;


  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.DepartmentName;
  }

  addDepartment(){
    var val = {DepartmentId:this.dep.DepartmentId,
              DepartmentName:this.DepartmentName};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.dep.DepartmentId,
      DepartmentName:this.DepartmentName};
      this.service.updateDepartment(val).subscribe(res=>{
      alert(res.toString());
});
  }

}
