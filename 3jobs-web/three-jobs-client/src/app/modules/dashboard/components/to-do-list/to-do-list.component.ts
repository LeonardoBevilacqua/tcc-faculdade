import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { ToDo } from 'src/app/shared/models/toDo';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({ selector: 'app-to-do-list', templateUrl: './to-do-list.component.html' })
export class ToDoListComponent extends MaintainForm<ToDo> implements OnInit {
    tasks: Array<ToDo>;


    constructor(private userService: UserService, toast: ToastrService, private authService: AuthService) {
        super(null, null, toast);
        this.tasks = [];
    }

    ngOnInit() {
        this.model = new ToDo();
        this.getAllToDo();
    }

    private getAllToDo() {
        if (this.authService.getUserId()) {
            this.userService.getAllToDo(this.authService.getUserId()).subscribe(
                (response) => {
                    this.tasks = response;
                },
                (error) => {
                    this.errorHandler(error);
                }
            );
        }
    }

    public onSubmit() {
        if (this.authService.getUserId()) {
            this.userService.createToDo(this.authService.getUserId(), this.model).subscribe(
                (response) => {
                    this.tasks = response;
                    this.model = new ToDo();
                },
                (error) => {
                    this.errorHandler(error);
                }
            );
        }
    }

    public removeTask(id: number) {
        if (this.authService.getUserId()) {
            this.userService.removeToDo(this.authService.getUserId(), id).subscribe(
                (response) => {
                    this.tasks = response;
                },
                (error) => {
                    this.errorHandler(error);
                }
            );
        }
    }
}
