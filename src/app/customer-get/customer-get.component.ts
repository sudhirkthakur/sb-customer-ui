import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service'
import { Customer } from '../Customer';
import { Router } from "@angular/router";


@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent implements OnInit {
  customers: Customer[];
  constructor(private cs: CustomersService, private router: Router) { }


  ngOnInit() {


    this.cs.getAll().subscribe(data => {
      this.customers = data;
    });

  }




  onUpdate(customer: Customer) {


    var id = customer.id;


    this.router.navigate(['update',id])
  }


  onDelete(id,rev) {


    this.cs.delete(id,rev).subscribe(data => {
      alert('records id delete');
});
  }

}
