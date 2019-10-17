import { ToastrService } from 'ngx-toastr';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/shared/models/toDo';

@Component({ selector: 'app-to-do-list', templateUrl: './to-do-list.component.html' })
export class ToDoListComponent extends MaintainForm<ToDo> implements OnInit {
    tasks: Array<ToDo>;


    constructor(private userService: UserService, toast: ToastrService) {
        super(null, null, toast);
        this.tasks = [];
    }

    ngOnInit() {
        this.model = new ToDo();
        this.getAllToDo();
    }

    private getAllToDo() {
        this.userService.getAllToDo().subscribe(
            (response) => {
                this.tasks = response;
            },
            (error) => {
                this.toastr.error(error);
            }
        );
    }

    public onSubmit() {
        this.userService.createToDo(this.model).subscribe(
            (response) => {
                this.tasks = response;
                this.model = new ToDo();
            },
            (error) => {
                this.toastr.error(error);
            }
        );
    }

    public removeTask(id: number) {
        this.userService.removeToDo(id).subscribe(
            (response) => {
                this.tasks = response;
            },
            (error) => {
                this.toastr.error(error);
            }
        );
    }
}
