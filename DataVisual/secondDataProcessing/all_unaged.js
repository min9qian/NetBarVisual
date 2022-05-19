// lll();

function lll(){
    let temp_test = []

    for(let i=0; i<unagedNumber.length; i++){
        temp_test.push({
            date: unagedTimeLine[i],
            num_per_day:unagedNumber[i],
            online_time_per_day:UnagedTimeLength[i]
        })
    }

    console.log(temp_test)

    let sortData_temp_test = temp_test.sort(function(a,b){
        return a.date > b.date ? 1 : -1;
    })

    let all_unagedTimeLine = []
    let all_unagedNumber = []
    let all_UnagedTimeLength = []

    for(let i=0; i<sortData_temp_test.length; i++){
        all_unagedTimeLine.push(sortData_temp_test[i]["date"])
        all_unagedNumber.push(sortData_temp_test[i]["num_per_day"])
        all_UnagedTimeLength.push(sortData_temp_test[i]["online_time_per_day"])
    }

    console.log(all_unagedTimeLine)
    console.log(all_unagedNumber)
    console.log(all_UnagedTimeLength)
}