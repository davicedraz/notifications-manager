console.log("Service working initiated!");

self.addEventListener('push', function (event) {
  const body = event.data?.text() ?? '';

  // const data = e.data.json();
  // console.log(data)
  console.log('Notification Received');

  event.waitUntil(
    self.registration.showNotification('Test', {
      body
    })
  )
})