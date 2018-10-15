import { Component, OnInit, ViewChild } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
    selector: 'app-dynamic-load',
    // templateUrl: './dynamic-load.component.html',
    styleUrls: ['./dynamic-load.component.css'],
    template: `
      <div>
        <add-banner [ads]="ads"></add-banner>
      </div>
    `
})
export class DynamicLoadComponent implements OnInit {


    ads: AdItem[];

    @ViewChild('editor') editor: any;

    constructor(private adService: AdService) {

    }

    ngOnInit() {
        const that = this;
        this.ads = this.adService.getAds();
    }

}
