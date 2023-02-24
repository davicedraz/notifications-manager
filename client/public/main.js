const loggedUserEmail = 'davioler@gmail.com'; //change to a registered user email in notifications-api

navigator.serviceWorker.register('service-worker.js')
  .then(async serviceWorker => {
    let webPushSubscription = await serviceWorker.pushManager.getSubscription();

    if (!webPushSubscription) {
      webPushSubscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BF7B1xzIxOYstorK675ni7hnCSipIMRL4LQlxYEG1yzffPafghS3IK3Y6rh61sbGJtd8A3eLJp-8e1uVWbglXiM' //public key, for demo purposes
      });
    }

    console.log(JSON.stringify(webPushSubscription));

    // Making request to send the webPushSubscription object to the /users route
    fetch('http://localhost:3000/v1/users', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loggedUserEmail,
        webPushSubscription
      })
    }).then(response => {
      if (response.ok) {
        console.log('Web push subscription successfully sent to the backend!');
      } else {
        console.error('Error sending web push subscription to backend:', response.status);
      }
    }).catch(error => {
      console.error('Error in PATCH request to send web push subscription to backend:', error);
    });
  });

function enableWebPush(enabled = true) {
  fetch('http://localhost:3000/v1/users', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: loggedUserEmail,
      preferences: [
        {
          channel: "web_push",
          enabled
        }
      ]
    })
  }).then(response => {
    if (response.ok) {
      console.log('User subscribe preferences sent to the backend!');
    } else {
      console.error('Error sending user subscribe preferences to backend:', response.status);
    }
  }).catch(error => {
    console.error('Error in PATCH request to send user subscribe preferences to backend:', error);
  });
}