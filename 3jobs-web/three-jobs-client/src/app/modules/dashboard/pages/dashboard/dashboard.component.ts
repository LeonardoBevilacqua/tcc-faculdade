import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Role } from 'src/app/shared/models/enums/role.enum';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss'] })
export class DashboardComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    shouldDisplayRecrutersTable() {
        return this.authService.getUserRole() === Role.RECRUTER_ADMIN;
    }

}
