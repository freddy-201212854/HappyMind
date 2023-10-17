import { Injectable } from '@angular/core';
//import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from '@ionic/angular';
import { MobileTypes, Notification } from './models/constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private appId: string = '8c1bb856-0823-445c-9c90-4637a4cde84c';
  private googleProjectNumber: string = '323674191594';

  //constructor(private platform: Platform, private oneSignal: OneSignal) { }
  constructor() { }

  public initializeOneSignal() {
    /*let isMobile = (this.platform.is(MobileTypes.android) || this.platform.is(MobileTypes.ios)) ? true : false;
    if (isMobile) {
      this.oneSignal.startInit(this.appId, this.googleProjectNumber);

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

      this.oneSignal.handleNotificationOpened().subscribe(data => {
        // do something when a notification is opened
        //alert(data);
      });

      this.oneSignal.handleNotificationReceived().subscribe(data => {
        // do something when notification is received
        //alert(data);
      });

      this.oneSignal.endInit();
    }*/
  }

  getTokenDevice() {
    return new Promise((resolve, reject) => {
      /*this.oneSignal.getIds().then(data => {
        let token = data.userId;
        var movil: any = (this.platform.is(MobileTypes.ios)) ? Notification.apns : Notification.fcm;
        resolve({ token: token, platform: movil });
      }).catch(error => {
        console.log(error)
        reject(error);
      });*/
    });
  }
}
