import { MENU } from './app.menu';
import { Routes } from '@angular/router';
import { BaMenuService } from './shared/services/baMenu/baMenu.service';
import { BaThemeSpinner } from './shared/services/baThemeSpinner/baThemeSpinner.service';
import { BaThemePreloader } from './shared/services/baThemePreloader/baThemePreloader.service';
import { TranslateService } from 'ng2-translate';
import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(
    public translate: TranslateService,
    private _spinner: BaThemeSpinner,
    private _menuService: BaMenuService
  ) {
    translate.addLangs(['nb', 'en']);
    translate.setDefaultLang('nb');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|nb/) ? browserLang : 'nb');

    this._menuService.updateMenuByRoutes(<Routes>MENU);
  }

  ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

}
