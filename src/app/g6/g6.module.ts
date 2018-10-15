import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G6RoutingModule } from './g6.routing';
import { G6Component } from './g6.component';

@NgModule({
    imports: [
        CommonModule,
        G6RoutingModule
    ],
    declarations: [
        G6Component
    ]
})
export class G6Module { }
