import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor.routing';


@NgModule({
    declarations: [
        EditorComponent,
    ],
    imports: [
        CKEditorModule,
        FormsModule,
        EditorRoutingModule
    ],
})
export class EditorModule { }
