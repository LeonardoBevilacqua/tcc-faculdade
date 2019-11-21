import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../services/search.service';

@Injectable()
export class DirectAccessUrlGuard implements CanActivate  {

    
    constructor(private router: Router, private teste: SearchService) { }
   
   
    
    canActivate() {
        
        if (this.teste.tt()) {
            console.log(this.teste.tt());
            this.teste.changeS(false);
            return true;
        }else{
            console.log(this.teste.tt());
        this.router.navigateByUrl('/');
        return false;
        }
    }

  

  
}