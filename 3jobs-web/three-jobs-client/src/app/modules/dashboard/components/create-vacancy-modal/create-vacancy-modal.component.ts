import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { JobService } from 'src/app/core/services/job.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Job } from 'src/app/shared/models/job';
import { Tag } from 'src/app/shared/models/tag';

declare const $: any;

@Component({ selector: 'app-create-vacancy-modal', templateUrl: './create-vacancy-modal.component.html', })
export class CreateVacancyModalComponent extends MaintainForm<Job> {

    /**
     * Variable responsible to deal with the string of tags
     */
    tags: string;

    constructor(
        private jobService: JobService,
        router: Router,
        toastr: ToastrService,
        private spinnerService: Ng4LoadingSpinnerService,
        private authService: AuthService) {
        super(null, router, toastr);
    }

    @Input() model: Job;
    @Output() subject = new EventEmitter();

    public onSubmit() {
        this.spinnerService.show();
        if (this.model.id && this.model.id > 0) {
            this.jobService.update(this.model).subscribe(
                (response: any) => {
                    this.subject.emit();
                    this.spinnerService.hide();
                    $('#createVacancyModal').modal('hide');
                    this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
                },
                (error) => {
                    this.errorHandler(error);
                    this.spinnerService.hide();
                }
            );
        }
        else {
            this.jobService.create(this.model).subscribe(
                (response: any) => {
                    this.subject.emit();
                    this.spinnerService.hide();
                    $('#createVacancyModal').modal('hide');
                    this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
                },
                (error) => {
                    this.errorHandler(error);
                    this.spinnerService.hide();
                }
            );
        }
    }

    public onTagsChange() {
        this.model.tags = [];

        this.tags.split(',').forEach(tag => {
            const newTag = new Tag();

            newTag.description = tag.trim();
            newTag.type = 'JOB';

            this.model.tags.push(newTag);
        });
    }
}
