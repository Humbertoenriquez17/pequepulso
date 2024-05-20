self.addEventListener('push', function(event) {
    const title = 'Push Notification';
    const options = {
      body: 'You have a new message!',
      icon: '/icon.png', // optional, if you want to show an icon
      badge: '/badge.png' // optional, if you want to show a badge
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });