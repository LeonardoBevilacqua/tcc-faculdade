import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/services/register.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({ selector: 'app-registers', templateUrl: './registers.component.html', styleUrls: ['./registers.component.scss'] })
export class registersComponent implements OnInit {


    constructor(private titleService: Title, private registerService: RegisterService, private router: Router, private spinnerService: Ng4LoadingSpinnerService, private toast: ToastrService) { }

    ngOnInit() {
        this.titleService.setTitle(`${this.titleService.getTitle()} | Crie sua conta`);
    }

    register(form) {
        console.log(form.value);
        this.registerService.create(form.value).subscribe((res) => {
            this.router.navigateByUrl('/');
        },
        (error) => {            
            this.toast.error(error.statusText);
            this.spinnerService.hide();
        });
    }

}
