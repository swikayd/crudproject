import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../Shared/complaints.service';
import { TypePipe } from '../Shared/type.pipe';
import { StatusPipe } from '../Shared/status.pipe';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
  
})
export class TableComponent implements OnInit {
complaints: any = [];
total: number;
page: number = 1;
errorMessage: any;
  constructor(private _complaintsService: ComplaintsService) { }

  ngOnInit() {
  	this.list();
  } 
 
  list(){
    this._complaintsService.getAPI()
  	.subscribe(
  		complaints => this.complaints = complaints,
  			error => this.errorMessage = "Server ERROR!"); 
  }

  delete(id: number){
    this._complaintsService.deleteComplainById(id)
    .subscribe(
      complaints => this.complaints = complaints,
  			error => this.errorMessage = "Server ERROR!"); 
  }
}
