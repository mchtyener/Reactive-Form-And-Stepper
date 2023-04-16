import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selected: any;


  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');

    const browserLang: any = translate.getBrowserLang();
    this.selected = browserLang
    translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
  }

  ngOnInit() {
  }
}
