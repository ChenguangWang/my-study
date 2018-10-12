import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor.component';


@NgModule({
    declarations: [
        EditorComponent,
    ],
    imports: [
        BrowserModule,
        CKEditorModule,
        FormsModule
    ],
})
export class EditorModule { }
