// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Конфігурація з Firebase
  firebaseConfig: {
    apiKey: 'AIzaSyDdpyG8m4q-4b_awPTlp3qeOFrEV-t9TFo',
    authDomain: 'eko-posud.firebaseapp.com',
    databaseURL: 'https://eko-posud-default-rtdb.firebaseio.com',
    projectId: 'eko-posud',
    storageBucket: 'eko-posud.firebasestorage.app',
    messagingSenderId: '767275373508',
    appId: '1:767275373508:web:36de23381c09865cb94a91',
    measurementId: 'G-CG6T1M19E1',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
