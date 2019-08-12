import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from './Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public API = 'https://sb-demo.invoicing.us-south.containers.appdomain.cloud/cust-sor/customers';



public API_CREATE = 'https://sb-demo.invoicing.us-south.containers.appdomain.cloud/cust-sor/customer/{id}';

public API_DELETE = 'https://sb-demo.invoicing.us-south.containers.appdomain.cloud/cust-sor/customer';



  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
     return this.http.get(this.API);
   }


   getCustomer(id : any): Observable<any> {
     // var FETCH_CUST = 'https://sb-demo.invoicing-prod.us-south.containers.appdomain.cloud/cust-sor/customers/'+custid;
     var FETCH_CUST = 'https://sb-demo.invoicing.us-south.containers.appdomain.cloud/cust-sor/customer/'+id;


      return this.http.get(FETCH_CUST);
    }


   register(customer: Customer) {

           return this.http.post(this.API_CREATE, customer);
       }

       delete(id : any, rev : any) {


         var data = {
              id: id,
              rev: rev
            };
               // return this.http.post(this.API_DELETE, customer);
               return this.http.delete(this.API_DELETE, {params: {id: id, rev: rev}});

           }

}
