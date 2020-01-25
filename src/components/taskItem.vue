<template>
  <div @click="show = !show">
    <h4>{{list.name}}</h4>
    <p>{{checkState()}}{{formattedTime}}</p>
    <taskDetailPg v-if="show" :listItem="list"/>
  </div>
</template>

<script>
import taskDetailPg from './TaskDetails'
  export default {
    components:{
      taskDetailPg
    },
    props: {
      list: Object,
      onGoing:{
        type: Boolean,
        required: false
      },
      done:{
        type: Boolean,
        required: false
      },
      task:{
        type: Boolean,
        required: false
      }

    },

    data: ()=>({
      timerState: 'stopped',
      currentTimer: 0,
      formattedTime: "00:00:00",
      ticker: undefined,
      snackbar: false,
      show : false
    }),

    methods:{
      taskDetails(){
        this.show = true
      },
      startTime () {
        if (this.timerState !== 'running') {
          this.tick('running');
          this.timerState = 'running';
        }
      },
      tick (str) {
        if(str == 'running') {
          this.ticker = setInterval(() => {
            this.pause();
            this.currentTimer++;
            this.formattedTime = this.formatTime(this.currentTimer);
          }, 1000)
        } 
      },
      formatTime (seconds) {
        let measuredTime = new Date(null);
        measuredTime.setSeconds(seconds);
        let MHSTime = measuredTime.toISOString().substr(11, 8);
        return MHSTime;
      },
      pause () {
        this.timerState = 'paused';
        window.clearInterval(this.ticker);
        this.$root.pauseTime = this.formattedTime;
        this.list.time = this.$root.pauseTime
      },
      checkState(){
        if (this.onGoing==true) {
            this.startTime ();
        } else if(this.done==true){
          this.formattedTime= this.list.time;
            
        } else if(this.task==true){
        }
      },
  
    }
  }
</script>

<style>

</style>