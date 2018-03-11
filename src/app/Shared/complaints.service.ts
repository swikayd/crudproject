import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Complaint } from './complaint.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class ComplaintsService {
private BaseUrl = 'https://auditerp-api.azurewebsites.net/Complaint';
  constructor(private _http: Http) { }

  /* GET API METHOD */
  getAPI(){
  	return this._http.get(this.BaseUrl+'/Get_Complaints')
  	.map((res: Response) => res.json())
  	.catch(this.handleError);
  }
  handleError(error: Response){
  	console.error(error);
  	return Observable.throw(error);
  }
   /* POST API METHOD */
  saveComplaint(complaint: Complaint): Observable<Complaint>{
    return this._http.post(this.BaseUrl + '/Add_Complaint', complaint)
    .catch((error:any) => Observable.throw(error.json()
      .error || "Server Error"));
  }
  findById(id: number): Observable<Complaint>{
    return this._http.get(this.BaseUrl+'/Get_ComplaintById'+'?jsonData=%7B%22id%22%3A%20'+id+'%20%7D')
    .map((res: Response) => res.json())
    .catch((this.handleError));
  }
  updateComplaint(complaint: Complaint): Observable<Complaint>{
    return this._http.put(this.BaseUrl+'/Update_Complaint', complaint)
    .map((res: Response) => res.json())
    .catch((this.handleError));
  }
  deleteComplainById(id: number): Observable<boolean> {
    return this._http.delete(this.BaseUrl+'/Delete_Complaint'+'/'+id)
      .map((res:Response) => res.json())
      .catch((this.handleError));
  }
}