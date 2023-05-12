import { Notifyer } from './Notifyer';
import { Emmitter } from './Emitter';

const notify = Notifyer.notify({
    title: 'Empresa',
    body: 'Informe de rendimento disponível',
    icon: ''
});

const App = {
    async start() {
        try {
            await Notifyer.init()
            Emmitter.on('countdown-start', notify); 
        } catch (err) {
            console.log(err.message);
        }
    }
}

export { App };