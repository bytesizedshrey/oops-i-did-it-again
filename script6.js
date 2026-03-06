function instaDataFetch(username,cb){
        //logic to handle the response
        setTimeout(() => {
            cb({id : 1, username : 'harsh',age:90})
        }, 2000);
}
instaDataFetch('harsh',function(data){
    console.log(data);
}); // Output: {id : 1, username : 'harsh',age:90} after 2 seconds

//executing the callback function after 4 seconds with the data object as an argument.
function afterDelay(time,cb){
    setTimeout(() => {
        cb();
    }, 4000);
}
afterDelay(4000,function(){
    console.log("Callback function executed after 4 seconds");
});
 