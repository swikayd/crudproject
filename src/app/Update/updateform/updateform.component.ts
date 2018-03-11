import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComplaintsService } from '../../Shared/complaints.service';
import { Complaint } from '../../Shared/complaint.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {
id: number;
errorMessage: string;
showid: number;
complaint: Complaint;
complaintForm : FormGroup;
complaints: any = [];
private sub: any;
  constructor(private _router: Router,
  				private complaintService: ComplaintsService,
          private route: ActivatedRoute) { }

  onBack(){
  	this._router.navigateByUrl('/home');
  }
  ngOnInit() {
      this.complaintForm = new FormGroup({
      ComplaintId: new FormControl(),
      Year: new FormControl(),
      ReportReference: new FormControl(),
      Domain: new FormControl(),
      CompanyEmp: new FormControl(),
      ComplaintType: new FormControl(),
      Comment: new FormControl(),
      ComplaintStatus: new FormControl(),
      EmailReference: new FormControl(),
    });
  	  this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
      });

      if(this.id) {
      this.complaintService.findById(this.id).subscribe(
        complaint => {
            this.id = complaint.ComplaintId;
            this.complaintForm.patchValue({
            ComplaintId: complaint.ComplaintId,
            Year: complaint.Year,
            ReportReference: complaint.ReportReference,
            Domain: complaint.Domain,
            CompanyEmp: complaint.CompanyEmp,
            ComplaintType: complaint.ComplaintType,
            Comment: complaint.Comment,
            ComplaintStatus: complaint.ComplaintStatus,
            EmailReference: complaint.EmailReference
          });
         },error => {
          console.log(error);
         }
      );
 
    }
  }

   onSubmit(){
    if(this.id){
    let complaint: Complaint = new Complaint(this.id,
      this.complaintForm.controls['Year'].value,
      this.complaintForm.controls['ReportReference'].value,
      this.complaintForm.controls['Domain'].value,
      this.complaintForm.controls['CompanyEmp'].value,
      this.complaintForm.controls['ComplaintType'].value,
      this.complaintForm.controls['ComplaintStatus'].value,
      this.complaintForm.controls['Comment'].value,
      this.complaintForm.controls['EmailReference'].value);
      
      if(confirm("Are you sure you to Update?") == true){
          this.complaintService.updateComplaint(complaint).subscribe();
          alert("Complain has been Updated!");
          this.complaintForm.reset();
          window.location.href = "/home";
      }
    }
  }
  //   onDelete(complaint: Complaint) {
  //   if (complaint) {
  //     this.complaintService.deleteComplainById(this.id).subscribe(
  //       res => {
  //         this.complaintService.getAPI()
  //         .subscribe(
  //     complaints => this.complaints = complaints);
  //         alert("Deleted!");
  //       }
  //     );
  //   }
  // }
}
