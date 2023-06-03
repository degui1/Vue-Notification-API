<template>
  <div class="hello">
    <p>Próximo Post em</p>
    <span>{{ this.minutes }}:{{ this.seconds }}</span>
  </div>
</template>

<script>
import { App } from '@/Notification/App';
import { Emmitter } from '@/Notification/Emitter';


export default {
  name: 'HelloWorld',
  data(){
    return {
      minutes: '00',
      seconds: '00',
      time: 0.3 * 60,
      currentTime: 0,
      interval: null,
    }
  },
  mounted() {
    App.start();
    // Emmitter.on('countdown-end', this.init);
    // this.init();
  },
  methods: {
    
    timeToMinutes: time => Math.floor(time / 60),
    timeToSeconds: time => time % 60,

    formatTime : time => String(time).padStart(2, '0'),

    init() {
        Emmitter.emit('countdown-start');
        this.currentTime = this.time;
        this.interval = setInterval(this.countdown, 1000);
    },
    countdown() {
        this.currentTime--;

        const minutes = this.formatTime(this.timeToMinutes(this.currentTime));
        const seconds = this.formatTime(this.timeToSeconds(this.currentTime));

        this.minutes = String(minutes);
        this.seconds = String(seconds);

        if (this.currentTime === 0) {
            clearInterval(this.interval);
            Emmitter.emit('countdown-end')
            return;
        }     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
