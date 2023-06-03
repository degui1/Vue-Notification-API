const swInstaller = {
    SW: null,
    init: async () => {
        swInstaller.check();
        const swRegistration = await swInstaller.registerServiceWorker();
        console.log(swRegistration);
    },
    check: () => {
        if(!('serviceWorker' in navigator)) 
            throw new Error('No Service Worker support');

        if (!('PushManager' in window)) 
            throw new Error('No Push API support');
    },
    registerServiceWorker: async () => {
        const swRegistration = await 
            navigator.serviceWorker.register('./serviceWorker.js');
            return swRegistration;
    },
}

export { swInstaller };