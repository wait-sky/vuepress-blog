<template>
  <div>
    <el-input type="text" v-model="token" placeholder="请输入口令查看相关故事" /> <el-button type="primary" @click="views">查看</el-button>
    <div v-if="story">
      床前明月光
      疑是地上霜
      举头望明月
      低头思故乡
    </div>
  </div>
</template>

<script>
  export default {
    name: 'story',
    data () {
      return {
        token: '',
        story: false
      }
    },
    methods: {
      views () {
        if (this.token == 'manman') {
          this.story = true
          // 跳转用此方法解决,但是会有刷新页面效果, 用$router默认跳转readme文件
          window.location.href = '/Vue/aa'
        }
      }
    }
  }
</script>
