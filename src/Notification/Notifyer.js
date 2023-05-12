const Notifyer = {
    async init() {
        await Notification.requestPermission()
        .then( (res) => {
            if (res != 'granted') {
                throw new Error('Permissão negada');
            }
        })
    },
    notify({ title, body, icon }) {
        return () => new Notification(title, {
            body,
            icon
        });
    }
}

export { Notifyer };