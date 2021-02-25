<template>
  <div class="plug-unit-index">
      <ul>
          <li v-for="(item,index) in 100" :key="index">插件{{index}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data () {
        return {
            name:'插件'
        }
    }
}
</script>

<style>

</style>