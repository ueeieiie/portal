import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

Injectable()
export class RouteService {
    // routeMap = {
    //     home: '/home',
    //     about: '/about',
    //     todolist: '/todolist',
    //     quiz: '/quiz',
    //     root: '',
    //     wrongPath: '**'
    // };

    constructor (private router: Router){  }
    
    changeRoute(route){
        this.router.navigate([`/${route}`]);
    }
    
}
    
