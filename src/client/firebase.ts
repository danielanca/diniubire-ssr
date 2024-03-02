// import { initializeApp } from 'firebase/app';

// import {
//   getAnalytics,
//   isSupported as analyticsIsSupported,
// } from 'firebase/analytics';
// import 'firebase/storage';
// import { getStorage } from 'firebase/storage';

// let analytics: any;

// const firebaseConfig = {
//   apiKey: 'AIzaSyDxmbqzBXpIUoYCevqizlncQ80CH9b8--s',
//   authDomain: 'diniubire-89ce0.firebaseapp.com',
//   projectId: 'diniubire-89ce0',
//   storageBucket: 'diniubire-89ce0.appspot.com',
//   messagingSenderId: '207405173084',
//   appId: '1:207405173084:web:1bfdc7d5f35678d9789999',
//   measurementId: 'G-WFWYP44Z7L',
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// if (typeof window !== 'undefined') {
//   analyticsIsSupported().then(isSupported => {
//     if (isSupported) {
//       analytics = getAnalytics(app);
//     }
//   });
// }

// const storage = getStorage(app);

// export { storage };
// export default app;

// SapunMontan Configuration
import { initializeApp } from 'firebase/app';

import {
  getAnalytics,
  isSupported as analyticsIsSupported,
} from 'firebase/analytics';
import 'firebase/storage';
import { getStorage } from 'firebase/storage';

let analytics: any;

const firebaseConfig = {
  apiKey: 'AIzaSyBU-XLXRpmXuGWH8D0XLFRGU4-UA-b_fbg',
  authDomain: 'sapunmontan.firebaseapp.com',
  projectId: 'sapunmontan',
  storageBucket: 'sapunmontan.appspot.com',
  messagingSenderId: '763434878339',
  appId: '1:763434878339:web:287dd37cd472f368b5a2b6',
  measurementId: 'G-71TJGXC0TV',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  analyticsIsSupported().then(isSupported => {
    if (isSupported) {
      analytics = getAnalytics(app);
    }
  });
}

const storage = getStorage(app);

export { storage };
export default app;
