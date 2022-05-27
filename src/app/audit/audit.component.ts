import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {Audit} from './../_models/audit'
import { AlertService,  AuthenticationService } from '@/_services';

@Component({ templateUrl: 'audit.component.html' })
export class AuditComponent implements OnInit {
    auditForm: FormGroup;
    loading = false;
    auditData=[];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.auditForm = this.formBuilder.group({
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.auditForm.controls; }

}
