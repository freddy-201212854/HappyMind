import { Component, OnInit } from '@angular/core';

interface Message {
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-contact-with-doctor',
  templateUrl: './contact-with-doctor.page.html',
  styleUrls: ['./contact-with-doctor.page.scss'],
})
export class ContactWithDoctorPage implements OnInit {

  messages: Array<Message> = [];
  newMessageText: string = '';

  constructor() {

  }

  ngOnInit() {
  }

  sendMessage() {
    if (this.newMessageText.trim() === '') {
      return;
    }

    const newMessage: Message = {
      userName: 'Usuario',
      userAvatar: 'URL de la imagen del usuario',
      text: this.newMessageText,
      timestamp: new Date(),
    };

    this.messages.push(newMessage);
    this.newMessageText = '';
  }

}
