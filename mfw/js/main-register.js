console.log("加载成功")
require.config({
    paths:{
        jquery:"jquery-3.5.1",
        register:"register"
    }
})
require(["register"],function(rg){
    rg.register();
})