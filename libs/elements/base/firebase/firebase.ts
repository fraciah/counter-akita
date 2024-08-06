import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../../../../apps/first-monorepo/src/environments/environment';

const firebaseConfig = environment.firebase;

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
