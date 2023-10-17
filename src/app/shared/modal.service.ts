import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { FolderPage } from '../folder/folder.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  helpSubject: Subject<any> = new Subject();
  /**
   * Constructor.
   */
  constructor(private modalController: ModalController) { }

  /**
   * Display the user assistance mode
   */
  async showAssistant() {
    const modal = await this.modalController.create({
      component: FolderPage,
      componentProps: {},
      cssClass: 'help-modal'
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.data !== undefined) {
          this.helpSubject.next(data)
        }
      });
    return await modal.present();
  }
}
