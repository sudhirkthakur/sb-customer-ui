import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { CustomersService } from '../customers.service'
import { Customer } from '../Customer';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customers: Customer[];
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private cs: CustomersService, private route: ActivatedRoute) { }

  genders = ['Male', 'Female']

  ngOnInit() {







    this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
            gender: ['', Validators.required],
            countryOfBirth: ['', Validators.required],
            countryofResidence: ['', Validators.required],
            customerSegment: ['', Validators.required],
            addresses: this.formBuilder.array([
                this.initAddress(),
            ])
        });


        this.route.params.subscribe(params => {
               // this.id = +params['id']; // (+) converts string 'id' to a number

               // In a real app: dispatch action to load the details here.
               this.cs.getCustomer(this.route.snapshot.params['id']).subscribe(data => {

                 // this.id = data.id;
                 // this.rev = data.rev;
                 // this.firstName = data.firstName;
                 // this.middleName = data.middleName;
                 // this.lastName = data.lastName;
                 // this.dateOfBirth = data.dateOfBirth;
                 // this.mobileNumber = data.mobileNumber;
                 // this.gender = data.gender;
                 // this.countryOfBirth = data.countryOfBirth;
                 // this.countryofResidence = data.countryofResidence;
                 // this.customerSegment = data.customerSegment;
                 //
                 // this.addrLine1 = data.addresses[0].addrLine1;
                 // this.addrLine2 = data.addresses[0].addrLine2;
                 // this.addrLine3 = data.addresses[0].addrLine3;
                 // this.addrLine4 = data.addresses[0].addrLine4;
                 // this.countryCode = data.addresses[0].countryCode;
                 // this.zipCode = data.addresses[0].zipCode;
                 // this.state = data.addresses[0].state;
                 // this.city = data.addresses[0].city;
                 //
                 // this.addrLine1 = data.addresses[1].addrLine1;
                 // this.addrLine2 = data.addresses[1].addrLine2;
                 // this.addrLine3 = data.addresses[1].addrLine3;
                 // this.addrLine4 = data.addresses[1].addrLine4;
                 // this.countryCode = data.addresses[1].countryCode;
                 // this.zipCode = data.addresses[1].zipCode;
                 // this.state = data.addresses[1].state;
                 // this.city = data.addresses[1].city;

           });

            });

  }

  initAddress() {
      return this.formBuilder.group({
          addrLine1: ['', Validators.required],
          addrLine2: ['', Validators.required],
          addrLine3: ['', Validators.required],
          addrLine4: ['', Validators.required],
          countryCode: ['', Validators.required],
          zipCode: ['', Validators.required],
          state: ['', Validators.required],
          city: ['', Validators.required],
      });
  }

  get f() { return this.registerForm.controls; }



  onSubmit() {


    const control = <FormArray>this.registerForm.controls['addresses'];
    control.push(this.initAddress());


          this.cs.register(this.registerForm.value)
              .pipe(first())
              .subscribe(
                  data => {
                      alert('ok');
                  },
                  error => {
                      alert('error');
                  });
      }

}
