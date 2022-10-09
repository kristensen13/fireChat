import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ChatsService } from './services/chats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public chats: Observable<any>;
  constructor(private db: AngularFirestore) {
    this.chats = db.collection('chats').snapshotChanges();
  }
}
