import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestContentComponent } from './test-content.component';
import { RouterModule } from '@angular/router';
import { DemoNgContentComponent } from './demo-ng-content/demo-ng-content.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestContentComponent
      }
    ])
  ],
  declarations: [TestContentComponent, DemoNgContentComponent]
})
export class TestContentModule { }
