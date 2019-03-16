<template>
    <li>
        <span v-if="mode=='type2'">type2 : 3page </span>
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