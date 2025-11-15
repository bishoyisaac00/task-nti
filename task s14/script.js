function num (startnum , endNum , BreakNum , ContNum)
{
    if(startnum&&endNum&&BreakNum&&ContNum)
    {
        for(var i = startnum ; i <= endNum ; i++){
            if(i==BreakNum) break
            else if( i==ContNum) continue
            console.log(i)
        }
    }

    
    else console.log('please enter all ')

}

num(1,15,12,5)




// task 2


userinfo= ["html","css","java","boot"]

    var p = prompt("enter corse")
 if(userinfo.includes(p))
 { 

   console.log("course is found")
}
else{

    userinfo.push(p)
    console.log(userinfo)
}


