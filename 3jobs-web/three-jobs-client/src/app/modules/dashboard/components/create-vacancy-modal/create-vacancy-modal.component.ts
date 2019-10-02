import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/core/services/job.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Job } from 'src/app/shared/models/job';

declare const $: any;

@Component({ selector: 'app-create-vacancy-modal', templateUrl: './create-vacancy-modal.component.html', })
export class CreateVacancyModalComponent extends MaintainForm<Job> implements OnInit {

    constructor(private jobService: JobService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService) {
        super(null, router, toastr, spinnerService);
    }

    @Input() model: Job;
    @Output() subject = new EventEmitter();


    ngOnInit() {
    }

    public onSubmit() {

        this.spinnerService.show();
        this.jobService.create(this.model).subscribe(
            (response: any) => {
                this.subject.emit();
                this.spinnerService.hide();
                $('#createVacancyModal').modal('hide');
                this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
            },
            (error) => {
                this.toastr.error(error);
                this.spinnerService.hide();
            }
        );
    }
}
