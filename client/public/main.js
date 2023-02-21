navigator.serviceWorker.register('service-worker.js')
  .then(async serviceWorker => {
    let webPushSubscription = await serviceWorker.pushManager.getSubscription();

    if (!webPushSubscription) {
      webPushSubscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        //public key
        applicationServerKey: 'BF7B1xzIxOYstorK675ni7hnCSipIMRL4LQlxYEG1yzffPafghS3IK3Y6rh61sbGJtd8A3eLJp-8e1uVWbglXiM' 
      });
    }

    console.log(JSON.stringify(webPushSubscription));
  })