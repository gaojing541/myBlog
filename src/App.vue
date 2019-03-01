<template>
  <div id="app">
      <!-- <AddBlog></AddBlog>
      <ShowBlog></ShowBlog> -->
      <blog-header></blog-header>
      
      <router-view></router-view>
      
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  components: {
    ShowBlog,
    AddBlog,
    BlogHeader
  }
}
</script>

<style>

</style>
