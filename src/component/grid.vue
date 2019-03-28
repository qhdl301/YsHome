<template>
    <div class="w3-container">
        <hr>
        <table id="list" border="1"></table>
	    <!--<div id="pager2"></div>-->
    </div>
</template>
<script>
    import axios from 'axios'
     export default {
       data() { 
        return {
            areaGridInfo : [],
        } 
      },
       mounted() {
           this.gridGet()
       },
      methods:{
          gridRowSet(){
                //console.log("1 : ",this.$data.areaGridInfo);
              for(var i = 0; i < this.$data.areaGridInfo.length; i++){
                $("#list").jqGrid('addRowData',i+1,this.$data.areaGridInfo[i]);
                //console.log("2 : ",this.$data.areaGridInfo[i]);
              }
          },
          gridColSet(){
              var _this = this
              $("#list").jqGrid({
                
                datatype: "json",
                  
                colNames:['Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'], 

                colModel:[ 
                       
                    {name:'id',index:"id", width:60, sorttype:"int"},

                    {name:'invdate',index:"invdate", width:60, sorttype:"int"},

                    {name:'name',index:"name", width:100},

                    {name:'amount',index:"amount", width:80, align:"right",sorttype:"float"},

                    {name:'tax',index:"tax", width:80, align:"right",sorttype:"float"},		

                    {name:'total',index:"total", width:80,align:"right",sorttype:"float"},		

                    {name:'note',index:"note", width:150, sortable:false}

                ],

                //rowNum:10,

                //rowList:[10,20],

                //pager: '#pager2',

                //viewrecords: true,
                
                //multiselect: true,

                caption: "jqGrid 체험 중"

            });
                _this.gridRowSet();
          },
          gridGet(){
               var _this = this;
               var reqUrl = "https://my-json-server.typicode.com/qhdl301/YsAxios/gridData"
                axios.get(reqUrl).then(function(result){
                    if(result.status == 200){
                        //console.log(result.data)
                        //console.log(result.data.rows)
                        _this.$data.areaGridInfo = result.data.rows
                        _this.$data.areaGridData = result.data 
                        _this.gridColSet()                       
                    }else{
                        alert("통신 실패!!")
                    } 
                })
          }
      },
      props:[
          "mode",
      ]
  }
</script> 