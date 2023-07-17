;// Delgetstei ajillah controller
var uiController = (function(){

})();
//sanhvvtei ajillah controller
var financeController = (function(){
    
})();

//programmin holbogch controller
var appController = (function(uiController, financeController){
    let ctrllAddItem=function(){
        console.log("amaraa")
    }
  document.querySelector(".add__btn").addEventListener("click", function(){ 
    ctrllAddItem()
   })
   document.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
     ctrllAddItem()   
    }
   })
})(uiController, financeController)