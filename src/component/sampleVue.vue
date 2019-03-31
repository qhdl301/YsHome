<template>
    <div class="w3-container">
        <hr>
            data1 : {{number}}
            <button v-on:click="plusNum">더하기</button>
            <br>
            computed1 : {{mulNum}}
            <br>
            data2 : {{number2}}
            <button v-on:click="plusNum2">더하기</button>
            <br>
            computed2 : {{mulNum2}}
            <br>
            data1 + data2 : {{numSum}}
            <br>
            compu1 + compu2 : {{compuPlus}}
            <br>
            num3 <input type="number" v-model="number3">
            <p>
            num1 + num2 + num3 : {{allSum}}
        <hr>    
    </div>
</template>
<script>
     export default {
       data() { 
        return {
            number : 0,
            number2 : 1,
            number3 : 0,
        } 
      },
      methods:{
        plusNum : function(){
            this.$data.number++ 
        },
        plusNum2 : function(){
            this.$data.number2++ 
        }
      },
      computed : { // 컴포넌트 내의 데이터가 변경되는것을 캐치하여, 선언된 함수로 계산하여 데이터를 템플릿에 Return 가능.(데이터를 재가공하여 사용하는 용도)
          mulNum: function () {
                // `this` 는 vm 인스턴스를 가리킵니다.
                var mul = this.number * 100
                return mul
          },
          mulNum2: function () {
                // `this` 는 vm 인스턴스를 가리킵니다.
                var mul = this.number2 * 100
                return mul
          },
          numSum:function() {
                return this.number  + this.number2
          },
          compuPlus:function() {
              return this.mulNum + this.mulNum2
          },
          allSum:function(){
              return Number(this.number) + Number(this.number2) + Number(this.number3)
          }
      },
      watch : { // 컴포넌트 내의 데이터가 변경되는것을 캐치하여, 선언한 함수를 실행함.(데이터를 사용하지않고 상태변환만 필요할 경우)
            compuPlus : function(){
                if(this.compuPlus >= 1000){ //computed에서 선언된 변수도 this로 불러올수있음.
                    alert("compuPlus가 1000이 되었습니다.")
                }
            }
      }
  }
</script> 