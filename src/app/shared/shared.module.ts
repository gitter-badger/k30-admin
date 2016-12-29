import { BaThemeConfigProvider } from './services/theme.configProvider';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { AuthHttp, AuthConfig } from './providers/angular2-jwt';
import { Http } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BaBackTop,
  BaCard,
  BaCheckbox,
  BaMultiCheckbox,
  BaContentTop,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaPageTop,
  BaSidebar
} from './components';

import { BaCardBlur } from './components/baCard/baCardBlur.directive';

import {
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun
} from './directives';

import {
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
} from './pipes';

import {
  BaImageLoaderService,
  BaMenuService,
  BaThemePreloader,
  BaThemeSpinner,
  GlobalState
} from './services';

import {
  EmailValidator,
  EqualPasswordsValidator
} from './validators';

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
  BaCardBlur
];

const NGA_PIPES = [
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

export function AuthHttpFactory(http: any) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: () => localStorage.getItem('token') as string,
    globalHeaders: [
      { 'Content-Type': 'application/json' },
      { 'Accept': 'application/json' }
    ],
  }), http);
}

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    /*COMPONENTS */
    BaBackTop,
    BaCard,
    BaCheckbox,
    BaMultiCheckbox,
    BaContentTop,
    BaMenuItem,
    BaMenu,
    BaMsgCenter,
    BaPageTop,
    BaSidebar
    /*...NGA_COMPONENTS*/
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    /*COMPONENTS */
    BaBackTop,
    BaCard,
    BaCheckbox,
    BaMultiCheckbox,
    BaContentTop,
    BaMenuItem,
    BaMenu,
    BaMsgCenter,
    BaPageTop,
    BaSidebar
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: AuthHttp,
          useFactory: AuthHttpFactory,
          deps: [Http]
        },
        BaThemeConfigProvider,
        ...NGA_VALIDATORS,
        GlobalState,
        BaImageLoaderService,
        BaThemePreloader,
        BaThemeSpinner,
        BaMenuService
        /*...NGA_SERVICES*/
      ]
    };
  }
}
