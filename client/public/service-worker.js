console.log("Service working initiated!");

self.addEventListener('push', function (event) {
  const payload = event.data.json();
  console.log('Notification Received:', payload);

  const title = payload.title;
  const options = {
    body: payload.body,
    icon: payload.image
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  )
});