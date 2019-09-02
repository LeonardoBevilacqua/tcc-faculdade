import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { ConditionalExpr } from '@angular/compiler';



@Component({ selector: 'app-registers', templateUrl: './registers.component.html', styleUrls: ['./registers.component.scss'] })
export class registersComponent implements OnInit {

    formulario: FormGroup;

    constructor(private formBuilder: FormBuilder, private titleService: Title, private userService: UserService, private router: Router, private spinnerService: Ng4LoadingSpinnerService, private toast: ToastrService) { }

    ngOnInit() {
        this.titleService.setTitle(`${this.titleService.getTitle()} | Crie sua conta`);

        this.formulario = this.formBuilder.group({
            name: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null],
            cpf: [null, [Validators.required, Validators.pattern("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")]]
        })

    
    }

    onSubmit() {

        this.userService.create(this.formulario.value).subscribe((res) => {

            console.log(this.formulario.value);
            this.router.navigateByUrl('/');

        },
            (error) => {
                this.toast.error(error.statusText);
                this.spinnerService.hide();
            });
    }

    verificaValidTouched(campo) {
        return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
    }

    aplicaCssErro(campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        }
    }


    /*  roles = [];
      register(form) {
  
          this.roles.push(form.value.roles);
          form.value.roles = this.roles;
          
  
          this.userService.create(form.value).subscribe((res) => {
              this.roles.pop();
              console.log(form.value);
              this.router.navigateByUrl('/');
             
          },
              (error) => {
                  this.toast.error(error.statusText);
                  this.spinnerService.hide();
              });
      }*/

}
