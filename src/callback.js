(function(window){
 let Per=function(){

 }
 Per.prototype={
   add(){
     console.log('我是组件')
   }
 }
 window.$=new Per()
})(window)