import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/core/services/job.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Job } from 'src/app/shared/models/job';
import { Tag } from 'src/app/shared/models/tag';

declare const $: any;

@Component({ selector: 'app-create-vacancy-modal', templateUrl: './create-vacancy-modal.component.html', })
export class CreateVacancyModalComponent extends MaintainForm<Job> implements OnChanges {

    /**
     * Variable responsible to deal with the string of tags
     */
    tags: string;

    constructor(
        private jobService: JobService,
        router: Router,
        toastr: ToastrService) {
        super(null, router, toastr);
        this.model = new Job();
    }

    @Input() model: Job;
    @Output() subject = new EventEmitter();

    ngOnChanges() {
        this.tags = '';

        for (const tag of this.model.tags) {
            this.tags += tag.description + ',';
        }

        this.tags = this.tags.slice(0, -1);
        this.model.tags = [];
    }

    public onSubmit() {
        if (this.model.id && this.model.id > 0) {
            this.jobService.update(this.model).subscribe(
                (response: any) => {
                    this.subject.emit();
                    $('#createVacancyModal').modal('hide');
                    this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
                },
                (error) => {
                    this.errorHandler(error);
                }
            );
        }
        else {
            this.jobService.create(this.model).subscribe(
                (response: any) => {
                    this.subject.emit();
                    $('#createVacancyModal').modal('hide');
                    this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
                },
                (error) => {
                    this.errorHandler(error);
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
