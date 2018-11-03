<template>
  <div class="home">
    <div class='colorMe'>
      I'm the parent component and I'm passing title and subtitle properties to my children
    </div>
    <GreenChild :title="title" @changeTitle="updateTitle($event)"></GreenChild>
    <PinkChild :subTitle="subTitle" @changeSubTitle="updateSubTitle($event)"></PinkChild>
    <BlueSibling :subTitle="subTitle"></BlueSibling>
  </div>
</template>

<script>
  //import bus and child components
  import { bus } from '../main'
  import GreenChild from '@/components/GreenChild.vue'
  import PinkChild from '@/components/PinkChild.vue'
  import BlueSibling from '@/components/BlueSibling.vue'

  export default {
    name: 'home',
    components: {
      //register components
      GreenChild,
      PinkChild,
      BlueSibling
    },
    data() {
      return {
        //define data
        title: 'Dan is Awesome',
        subTitle: 'He codes at mariposaweb.net'
      }
    },
    methods: {
      //update the title
      updateTitle(updatedTitle) {
        this.title = updatedTitle;
      },
      updateSubTitle(updatedSubTitle) {
        //not listening here so we specificly update
        this.subTitle = updatedSubTitle;
        //event bus
        bus.$emit('subTitleChanged', 'mariposaweb makes great Vue Apps')
      }
    }
  }
</script>
<style scoped>
  .colorMe {
    background: lemonchiffon;
    color: #222;
    font-size: 1.3em;
    font-weight: bold;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>