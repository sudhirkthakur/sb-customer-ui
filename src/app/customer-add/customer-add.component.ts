import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { CustomersService } from '../customers.service'
import { Customer } from '../Customer';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private cs: CustomersService) { }

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
                    // this.alertService.error(error);
                    // this.loading = false;
                    alert('error');
                });
    }

}
