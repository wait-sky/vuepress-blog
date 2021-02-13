<template>
  <div>
    <ul>
      <li v-for="item in links">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'website',
    data () {
      return {
        links: [
          { title: '百度', link: '', image: ''},
          { title: '百科', link: '', image: ''},
          { title: '翻译', link: '', image: ''},
          { title: 'bing', link: '', image: ''}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>