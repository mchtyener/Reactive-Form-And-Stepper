import {NgxSpinnerService} from 'ngx-spinner';
import * as swal from '../app/shared/data/sweet-alerts';
import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AppInjectorService} from "./services/app-injector.service";

@Component({
  template: '',
})
export abstract class BaseComponent {

  protected spinner;
  protected toastrService;


  protected constructor() {
    this.spinner = AppInjectorService.injector.get(NgxSpinnerService);
    this.toastrService = AppInjectorService.injector.get(ToastrService);
  }

  public spinnerShow() {
    return this.spinner.show();
  }

  public spinnerHide() {
    return this.spinner.hide();
  }

  public alertSuccess(title?: string, text?: string) {
    return swal.success(title, text);
  }

  public alertInfo(title?: string, text?: string) {
    return swal.info(title, text);
  }

  public alertError(title?: string, text?: string) {
    return swal.error(title, text);
  }

  public alertWarning(title?: string, text?: string) {
    return swal.warning(title, text);
  }

  public htmlAlertWarning(title?: string, text?: any) {
    return swal.warningHtml(title, text);
  }

  public async confirmOrShow(title?: string, text?: string, confirmButtonText?: string) {
    return await swal.confirm(title, text, confirmButtonText);
  }

  confirmAndRedirect(title: string, text: string, confirmButtonText?: string, redirectUrl?: any) {
    return swal.confirm(title, text, confirmButtonText).then((result) => {
      if (result.value) {
        //   this.router.navigateByUrl(redirectUrl);
      }
    });
  }

  confirmA(title: string, text: string, confirmButtonText?: string) {
    return swal.confirm(title, text, confirmButtonText);
  }

  textareaAlert() {
    return swal.alertTextarea()
  }


  confirmSuccesssAndRedirect(title: string, text: string, confirmButtonText?: string, redirectUrl?: any) {
    return swal.confirmSuccess(title, text, confirmButtonText).then((result) => {
      if (result.value) {
        //  this.router.navigateByUrl(redirectUrl);
      }
    });
  }

  toastrSuccess(text: string, title: string) {
    this.toastrService.success(text, title, {
      'timeOut': 2000
    });
  }

  toastrError(text: string, title: string) {
    this.toastrService.error(text, title, {
      'timeOut': 2000
    });
  }
}
