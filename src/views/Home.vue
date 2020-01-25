<template>
  <div class="home">
    <TaskContainer/>
 </div>
</template>

<script>
// @ is an alias to /src
import TaskContainer from "@/components/TaskContainer.vue";

export default {
  name: "home",
  components: {
    TaskContainer
  }
};
</script>
