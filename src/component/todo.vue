<template>
    <li>할일 항목 하나입니다. 
        <span v-if="mode=='type1'">type1 : {{message}} / {{text}} / {{flag}} </span>
        <span v-else>else : {{message}} / {{text}} / {{count}} </span>
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
          "text",
          "count",
          "flag",
          "mode",
      ]
  }
</script> 