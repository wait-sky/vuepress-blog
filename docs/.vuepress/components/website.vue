<template>
  <ul class="website">
    <li class="item" v-for="item in links" @click="handleWebClick(item)">
      <img class="image" :src="item.image" :alt="item.image">
      <span class="title">
        {{item.title}}
        <span class="line line-top"></span>
        <span class="line line-left"></span>
        <span class="line line-right"></span>
        <span class="line line-bottom"></span>
      </span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'website',
    data () {
      return {
        links: [
          { title: '百度', link: 'https://www.baidu.com', image: '/baidu.jpg'},
          { title: '百科', link: 'https://baike.baidu.com/item/%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91/85895?fr=aladdin', image: '/baike.jpg'},
          { title: '翻译', link: 'https://fanyi.baidu.com/?aldtype=16047#auto/zh', image: '/translate.jpeg'},
          { title: 'bing', link: 'https://cn.bing.com/', image: '/bing.jpeg'}
        ]
      }
    },
    methods: {
      handleWebClick (item) {
        window.open(item.link)
      }
    },
  }
</script>

<style lang="stylus" scoped>
.website
  width 50vw
  margin 0
  padding 0
  display flex
  flex-wrap wrap
  justify-content space-between
  .item 
    cursor pointer
    width 100px
    height 80px
    list-style none
    text-align center
    .image
      border-radius 8px
      display block
      width 100%
      height 55px
    .title
      border 2px solid #aaa
      font-weight 800
      display inline-block
      background #F4F4F5
      color #f0f
      width 100%
      height 25px
      margin-top 10px
      // background #333
      // &:hover
      // 边框线
      position relative
      // 所有的线
      .line
        display block
        position absolute
        background none
        transition 0.4s ease
      // 顶部线
      .line-top
        height 2px
        width 0px
        left -110%
        top -2px
      // 底部线
      .line-bottom
        width 0px
        height 2px
        right -110%
        bottom -2px
      // 左侧线
      .line-left
        width 2px
        height 0
        left -2px
        bottom -110%
      // 右侧线
      .line-right
        width 2px
        height 0px
        right -2px
        top -110%
    &:hover .line
      background #aaa
    &:hover .line-top
      width 100%
      left -2px
    &:hover .line-left
      height 100%
      bottom -2px
    &:hover .line-bottom
      width 100%
      right -2px
    &:hover .line-right
      height 100%
      top -2px
        
</style>