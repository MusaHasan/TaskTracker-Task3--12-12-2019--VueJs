<template>
  <div class="row">
    <v-col class="Content"  md="4"  >
      <h2 class="taskTitle">Task Pending</h2>
      <draggable class="dragArea list-group" :list="list1"  group="people">
        <div class="list-group-item" style="background-color: rgb(255, 127, 127)" v-for="element in list1" :key="element.id">
          <taskItem :list="element" :task="true"/>
        </div>
      </draggable>
      <v-icon class="taskIcon" @click="crtTask()">mdi-calendar-plus</v-icon>
    </v-col>

    <v-col class="Content"  md="4"  >
      <h2 class="onGoTitle">On Gonig</h2>
      <draggable class="dragArea list-group" :list="list2" group="people">
        <div class="list-group-item" style="background-color: rgb(255, 204, 127)" v-for="element in list2" :key="element.id">
          <taskItem :list="element" :onGoing="true"/> 
        </div>
      </draggable>
    </v-col>

    <v-col class="Content"  md="4"  >
      <h2 class="completeTitle">Alright Complete!</h2>
      <draggable class="dragArea list-group"  :list="list3" group="people">
        <div class="list-group-item" style="background-color: aquamarine" v-for="element in list3" :key="element.id">
         <taskItem :list="element" :done="true"/>
         <v-icon class="deleteIcon" @click="deleteTask()">mdi-delete-forever</v-icon>
        </div>
      </draggable>
    </v-col>
    <createTask v-if="show"/>
  </div>
</template>



<script>
  import draggable from "@/vuedraggable";
  import createTask from"./CreateTask";
  import taskItem from "./taskItem";
  import {bus} from '../main'


  let idGlobal = 8;
  
  export default {
    name: "TaskContainer",
    components: {
      draggable,
      createTask,
      taskItem
    },
    data: ()=>({
      show: false,
      list1: [
          // { name: "Jesus L1",descTxt:DescTxt, id: 1 },
          // { name: "Jesus L1",zzzzz id: 2 },
          // { name: "Jesus L1", id: 3 },
        ],
        list2: [
          // { name: "Jesus L2", id: 1, time: "00:00:00" }
        ],
        list3: [],
        count: 3
    }),
    created(){
      bus.$on('title',(data)=>{
        var ids= this.count+1;
        if(data.titleTxt==''){
          alert('please create some task')
        }else{
        this.list1.push({name:data.titleTxt, descTxt:data.DescTxt,MemverName:data.MemverNameTxt, id: ids })
        this.show = data.close;
        this.count = ids;
        }
      }),
      bus.$on('cancel',(cancel)=>{
        this.show = cancel;
      })
    },
    methods: {
      crtTask(){
        this.show = true; 
      },
      deleteTask(){
      this.list3.pop()
    }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Content{
  max-width: 32.3%;
  height: 33rem;
  text-align: center;
  border: 1px solid cadetblue;
  margin: 5px;
  padding: 10px;
  .taskTitle{
    background-color: rgb(255, 127, 127);
    padding: 5px;
    border: 1px solid steelblue;
  }
  .onGoTitle{
    background-color: rgb(255, 204, 127);
    padding: 5px;
    border: 1px solid steelblue;
  }
  .completeTitle{
    background-color: aquamarine;
    padding: 5px;
    border: 1px solid steelblue;
  }
  .dragArea{
    width: 100%;
    height: 90%;
    .list-group-item{
      display: flex;
      justify-content: center;
      border: 1px solid steelblue;
      border-radius: .25rem;
      font-size: 1rem;
      padding: 3px;
      margin: 2px;
    }
  }
  .taskIcon{
    position: relative;
    font-size: 3rem;
    top: -50px;
    left: 10rem;
    &:hover{
      border-radius: 50%;
      padding: 5px;
      background-color: rgba(6, 95, 95, 0.507);
    }
  }
  .deleteIcon{
    position: relative;
    font-size: 2rem;
    height: fit-content;
    top: 10;
    left: 30%;
    &:hover{
      border-radius: 50%;
      height: fit-content;
      top: 10;
      padding: 5px;
      background-color: rgba(6, 95, 95, 0.507);
    }
  }
}
</style>
