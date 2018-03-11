import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../../Shared/complaints.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Complaint } from '../../Shared/complaint.model';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
  providers: [ComplaintsService]
})
export class AddformComponent implements OnInit {
  complaint: Complaint;
  complaintForm : FormGroup;
  constructor(private complaintService: ComplaintsService){ }
  
  ngOnInit() {
  	this.complaintForm = new FormGroup({
  		Year: new FormControl(),
  		ReportReference: new FormControl(),
  		Domain: new FormControl(),
  		CompanyEmp: new FormControl(),
  		ComplaintType: new FormControl(),
  		Comment: new FormControl(),
  		ComplaintStatus: new FormControl(),
  		EmailReference: new FormControl(),
  	});
  }
  onSubmit(){
  	let complaint: Complaint = new Complaint(null,
  		this.complaintForm.controls['Year'].value,
  		this.complaintForm.controls['ReportReference'].value,
  		this.complaintForm.controls['Domain'].value,
  		this.complaintForm.controls['CompanyEmp'].value,
  		this.complaintForm.controls['ComplaintType'].value,
  		this.complaintForm.controls['ComplaintStatus'].value,
  		this.complaintForm.controls['Comment'].value,
  		this.complaintForm.controls['EmailReference'].value);
      
      if(confirm("Are you sure you to create Complain?") == true){
          this.complaintService.saveComplaint(complaint).subscribe();
          alert("Complain has been Created!");
          this.complaintForm.reset();
         

      }
  }
}
