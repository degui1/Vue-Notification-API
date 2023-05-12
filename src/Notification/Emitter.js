const Emmitter = {
    events: {},

    on(event, cb) {
        Emmitter.events[event] = Emmitter.events[event] || [];
        Emmitter.events[event].push(cb);
    },

    emit(event, ...rest) {
        if (event in Emmitter.events === false) return;

        Emmitter.events[event].forEach((e) => {
            e(...rest);
        });
    }
}

export { Emmitter };