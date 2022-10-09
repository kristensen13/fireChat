import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Chat } from '../models/Chat';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  constructor(private firebase: AngularFirestore) {}
  guardarMsj(chat: Chat): Promise<any> {
    return this.firebase.collection('chats').add(chat);
  }

  getChats(): any {
    return this.firebase.collection('chats').snapshotChanges();
    console.log(this.firebase.collection('chats').snapshotChanges());
  }
}
