import { Component, OnInit } from '@angular/core';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { JobService } from 'src/app/core/services/job.service';
import { Job } from 'src/app/shared/models/job';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

declare const $: any;

@Component({
    selector: 'app-create-vacancy-modal',
    templateUrl: './create-vacancy-modal.component.html',
    styleUrls: ['./create-vacancy-modal.component.scss']
})
export class CreateVacancyModalComponent extends MaintainForm<Job> implements OnInit {

    constructor(private jobService: JobService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService) {
        super(null, router, toastr, spinnerService);
    }

    ngOnInit() {
        
        this.model = new Job();
    }

    public onSubmit(){

        this.spinnerService.show();
        console.log(this.model);
        this.jobService.create(this.model).subscribe(
            (response: any) => {
                console.log(response);
               this.spinnerService.hide();
               $('#createVacancyModal').modal('hide');
               this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
            },
            (error) => {
                console.log(error);
                
                this.toastr.error(error);
                this.spinnerService.hide();
            }
        );
        
    }

}
