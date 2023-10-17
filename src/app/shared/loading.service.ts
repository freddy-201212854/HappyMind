import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: any;
  /** USED
    * async showLoading() {
    * this.loading.showLoading("Cargando...");
    * await this.loading.dismissLoading();
    * }
    * **/

  /**
   * Constructor.
   */
  constructor(public loadingController: LoadingController) { }

  /**
   * Show loading
   * @param message message to be displayed in loading
   */
  async showLoading(message) {
    this.loading = await this.loadingController.create({
      message: message
    });
    await this.loading.present();
  }

  /**
   * Show loading
   * @param message message to be displayed in loading
   */
   async showCustomLoading(message) {
    this.loading = await this.loadingController.create({
      message: '<ion-img src="assets/loading/Spinner.svg" alt="loading..."></ion-img> ' + '<div> ' + message + '</div>',
      cssClass: 'loading-custom',
      translucent: false,
      showBackdrop: true,
      spinner: null
    });
    await this.loading.present();
  }

  /**
   * wait for loading to close
   */
  async dismissLoading() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.loading !== undefined) {
          this.loading.dismiss();
          resolve(true)
        } else {
          reject(false)
        }
      }, 1000);
		});
  }
}
