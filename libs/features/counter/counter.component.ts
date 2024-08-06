import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../libs/elements/base/firebase/firebase';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  count: number = 0;
  userId: string = 'counterUser1';

  async ngOnInit() {
    const counterDoc = await getDoc(
      doc(collection(db, 'counters'), this.userId)
    );
    if (counterDoc.exists()) {
      this.count = counterDoc.data()['count'] || 0;
    }
  }

  async addCount() {
    this.count++;
    await this.saveCount();
  }

  async subCount() {
    if (this.count > 0) {
      this.count--;
      await this.saveCount();
    }
  }

  async saveCount() {
    const counterDocRef = doc(collection(db, 'counters'), this.userId);
    await setDoc(counterDocRef, { count: this.count });
  }
}
