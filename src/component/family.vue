<template>
    <div class="w3-container">
        <h2>Avatar List</h2>
        <p>You can combine w3-ul and the w3-bar classes to create an avatar list:</p>
        <ul class="w3-ul w3-card-4">
            <li class="w3-bar">
            <img src="https://www.w3schools.com/w3css/img_avatar2.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
            <div class="w3-bar-item">
                <span class="w3-large">아버지</span><br>
                <span>웹 개발자</span>
            </div>
            </li>

            <li class="w3-bar">
            <img src="https://www.w3schools.com/w3css/img_avatar6.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
            <div class="w3-bar-item">
                <span class="w3-large">어머니</span><br>
                <span>주부</span>
            </div>
            </li>

            <li class="w3-bar">
            <img src="https://www.w3schools.com/w3css/img_avatar5.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
            <div class="w3-bar-item">
                <span class="w3-large">누나</span><br>
                <span>백수</span>
            </div>
            </li>
        </ul>
        </div>
</template>
<script>
     export default {
       data() { 
        return {
        } 
      },
      methods:{

      },
      props:[
          "mode",
      ]
  }
</script>