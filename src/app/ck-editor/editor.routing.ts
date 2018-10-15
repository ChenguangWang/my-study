import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EditorComponent } from './editor.component';

const appRoutes: Routes = [
    {
        path: '',
        component: EditorComponent
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

export class EditorRoutingModule {

}
