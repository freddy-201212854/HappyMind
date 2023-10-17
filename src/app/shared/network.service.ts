import { Injectable } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';

export enum ConnectionStatus {
  Online,
  Offline
}

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);

  /**
   * Constructor.
   */
  constructor(private network: Network, private toastController: ToastController, private plt: Platform) {
    this.plt.ready().then(() => {
      this.initializeNetworkEvents();
      let status =  this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
      this.status.next(status);
    });
  }

  /**
   * initialize event method to detect internet connection.
   */
  public initializeNetworkEvents() {

    this.network.onDisconnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Online) {
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });

    this.network.onConnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Offline) {
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });
  }

  /**
   * update internet connection status
   * @param status internet connection status
   */
  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);

    let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
    let toast = this.toastController.create({
      message: `You are now ${connection}`,
      duration: 1500,
      position: 'bottom',
      mode: 'ios',
      translucent: true
    });
    toast.then(toast => toast.present());
  }

  /**
   * get internet connection status
   */
  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }

  /**
   * get internet connection status
   */
  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.status.getValue();
  }
}
