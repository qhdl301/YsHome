<template>
    <li>
        <span v-if="mode=='type1'">type1 : 2page </span>
    </li>
</template>
<script>
     export default {
       data() { 
        return {
          message: 'todo Vue!',
        } 
      },
      methods:{

      },
      props:[
          "mode",
      ]
  }
</script> 