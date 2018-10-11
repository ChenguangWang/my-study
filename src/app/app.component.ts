import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

declare var CKEDITOR: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    // template: `
    //   <div>
    //     <add-banner [ads]="ads"></add-banner>
    //   </div>
    // `
})
export class AppComponent implements OnInit {

    config: any = {
        width: '400px',
        // height: '158px',
        height: '358px',
        toolbar: [ // 工具栏
            ['Font', 'FontSize', 'TextColor', '-', 'Bold', 'Italic', 'Underline']
        ],
        removePlugins: 'elementspath',
        resize_enabled: false,
        disableAutoInline: true
    };

    content: any;


    ads: AdItem[];

    @ViewChild('editor') editor: any;

    constructor(private adService: AdService) { 

    }

    ngOnInit() {
        const that = this;
        this.ads = this.adService.getAds();
        document.getElementById('div').addEventListener("scroll", function (e) {
            let a = that.editor.instance;
            // 聚焦
            a.focus();

            // 将光标移至最末
            var range = a.createRange();
            range.moveToElementEditEnd(a.editable());

            range.select();
            range.scrollIntoView();
        })
    }

    ckeditorContent = '<p><span style="color:#c0392b">啦啦啦啦啦</span></p>';

    test() {
        // Get the editor instance that we want to interact with.
        var oEditor = CKEDITOR.instances.editor1;
        var value = `<a href='#"'>Solo</a>`;
        // Check the active editing mode.
        if (oEditor.mode == 'wysiwyg') {
            // Insert HTML code.
            oEditor.insertHtml(value);
        }
        else
            alert('You must be in WYSIWYG mode!');
    }
    InsertText() {
        // Get the editor instance that we want to interact with.
        var oEditor = CKEDITOR.instances.editor1;
        var value = "Solo";
        // Check the active editing mode.
        if (oEditor.mode == 'wysiwyg') {
            // Insert as plain text.
            oEditor.insertText(value);
        }
        else
            alert('You must be in WYSIWYG mode!');
    }
}