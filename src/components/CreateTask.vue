<template>
    <div class="blarBg">
        <v-col class="taskInputArea" @keyup.enter="onEnter()">
            <v-row class="inputElement">
                <h2>Create Task</h2> 
                <v-icon right @click="onClose()">mdi-close</v-icon>
            </v-row>
            <hr>
            <v-row class="inputElement">
                <h3>Title</h3>
                <input type="text" placeholder="Enter the Title" v-model="title" >
            </v-row>
            <v-row class="inputElement">
                <h3>Description</h3>
                <textarea name="taskDescrip" id="" cols="30" rows="10" placeholder="Enter a Short description" v-model="taskDescription" @keyup.enter="onEnter()"></textarea>
            </v-row>
            <v-row class="inputElement">
                <h3>Member</h3>
                <input type="text" placeholder="Assign to(member Name)" v-model="memverTxt">
            </v-row>
            
        </v-col>
    </div>
  
</template>

<script>
import {bus} from '../main'

export default {
    data: ()=>({
        title: '',
        taskDescription: '',
        memverTxt: ''
    }),
    methods:{
        onEnter(){ 
            var titleTxt = this.title;
            var DescTxt = this.taskDescription;
            var MemverNameTxt = this.memverTxt;
            var close = false;
            bus.$emit('title', {titleTxt,DescTxt,MemverNameTxt,close});
            this.title= '';
        },
        onClose(){
            var close = false;
            bus.$emit('cancel', close);
        }
    }

}
</script>

<style scoped lang="scss">
    .blarBg{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(28, 51, 43, 0.425);
        .taskInputArea{
            width: 30%;
            height: 80%;
            margin: 3% auto;
            background-color: aliceblue;
            border: 1px solid rgb(3, 153, 78);
            .inputElement{
                text-align: center;
                display: inline;
                textarea{
                    height: 120px;
                }
                input, textarea {
                    width: 100%;
                    padding: 5px;
                    border: 1px solid steelblue;
                }
                &:first-child{
                    display: flex;
                    h2{
                        margin-left: 5%;
                        margin-right: 50%;
                    }
                }
            }
        }
    }

</style>