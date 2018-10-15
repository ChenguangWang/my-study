import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { G6Component } from './g6.component';

const appRoutes: Routes = [
    {
        path: '',
        component: G6Component
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class G6RoutingModule {

}
