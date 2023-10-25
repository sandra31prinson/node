
// -----------array printing and pushing----

const arra=['sandra', 22 , 'hi']     



    arra.push('cherpu')
    console.log(arra);

// --------function with  return --------
    function myFunction(a,b)
    {
        return a*b
    }
    console.log(myFunction(5,10))

    // ------arrow function ---

    fun=(a,b)=>{
        return a*b
    }
    console.log(fun(10,30))

    // -----arrow function only have one value---

    arrowFunc=()=>10;

    console.log(arrowFunc());

 setInterval(()=>{
    console.log("running")
 },1000 )

 setTimeout(()=>{
    console.log("hoi")
 },2000);


 setTimeout(()=>{
    console.log("sayanth")
 },3000);


 const interval = setInterval(()=>{
    console.log("sandra")
 },1000);


 setTimeout(()=>{

    clearInterval(interval)
 },6000)