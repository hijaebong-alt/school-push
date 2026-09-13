// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// 아까 파이어베이스 설정에서 복사해 둔 값들을 여기에 넣습니다.
firebase.initializeApp({
  apiKey: "AIzaSyAxhSVNo3_MCCYAj36q8muRZRNAgEaavsk",
  authDomain: "school-push-app.firebaseapp.com",
  projectId: "school-push-app",
  storageBucket: "school-push-app.firebasestorage.app",
  messagingSenderId: "596227808764",
  appId: "1:596227808764:web:ac61982805cfd5bf92a679"
});

const messaging = firebase.messaging();

// 백그라운드 알림 수신 시 처리
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // 나중에 아이콘 파일 넣을 자마당
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
