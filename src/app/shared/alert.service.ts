import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LanguageService } from './language.service';
import { Messages } from './models/constants';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  /**
   * Constructor.
   */
  constructor(
    private alertController: AlertController,
    private language: LanguageService,
    public toastController: ToastController) { }

  /**
   * Show customized alert according to the parameters sent.
   * @param title title to be displayed in the alert.
   * @param subtitle subtitle to be displayed in the alert.
   * @param message message to be displayed in the alert.
   * @param inputs Inputs to be displayed in the alert.
   * @param buttons buttons to be displayed in the alert.
   */
  async showAlert(title: string = "", subtitle: string = "", message: string = "", inputs: any = null, buttons: [any] = null) {
    let options: any = {};
    if (title != "") { options.header = title; }
    if (subtitle != "") { options.subHeader = subtitle; }
    if (message != "") { options.message = message; }
    if (inputs !== null) { options.inputs = inputs; }
    if (buttons == null) {
      let acceptBtn = await this.language.getValue(Messages.accept);
      options.buttons = [acceptBtn];
    } else {
      options.buttons = buttons;
    }
    const alert = await this.alertController.create(options);
    alert.present();
  }

  /**
   * Show customized toast according to the parameters sent.
   * @param title title to be displayed in the alert.
   * @param message message to be displayed in the alert.
   * @param duration duration that the alert should last.
   * @param position position in which the alert should be displayed can be top, bottom, middle.
   * @param buttons buttons to be displayed in the alert.
   */
  async presentToastWithOptions(title: string = "", message: string = "", duration: number = 2000, position: string = "bottom", buttons: any = null) {
    let options: any = {};
    if (title != "") { options.header = title; }
    if (message != "") { options.message = message; }
    if (duration != 0) { options.duration = duration; }
    if (position !== null) { options.position = position; }
    if (buttons !== null) { options.buttons = buttons; }
    const toast = await this.toastController.create(options);
    toast.present();
  }
}
