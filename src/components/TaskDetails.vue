<template>
  <div>
      <h2>{{listItem.name}}</h2>
      <p>{{listItem.descTxt}}</p>
      <h3>{{listItem.MemverName}}</h3>
  </div>
</template>

<script>
export default {
    props:{
        listItem: Object
    }
}
</script>

<style>

</style>