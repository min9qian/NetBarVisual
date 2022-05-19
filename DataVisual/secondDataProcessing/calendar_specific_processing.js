// nnn();


function nnn(){

    let calendar_specific_detailnumber = {};
    for(let id in calendar_specific){
        // Object.keys(calendar_specific[id]).sort(function(a,b){return calendar_specific[id][b]-calendar_specific[id][a]})
        // console.log(calendar_specific[id])
        let total = []
        let month1 = []
        let month2 = []
        let month3 = []
        for(let i in specificDayLine){
            if(specificDayLine[i].substring(5,7) === "10"){
                if(calendar_specific[id][specificDayLine[i]] === undefined){
                    month1.push([specificDayLine[i], 0])
                }else{
                    month1.push([specificDayLine[i], calendar_specific[id][specificDayLine[i]]])
                }
            }else if(specificDayLine[i].substring(5,7) === "11"){
                if(calendar_specific[id][specificDayLine[i]] === undefined){
                    month2.push([specificDayLine[i], 0])
                }else{
                    month2.push([specificDayLine[i], calendar_specific[id][specificDayLine[i]]])
                }
            }else if(specificDayLine[i].substring(5,7) === "12"){
                if(calendar_specific[id][specificDayLine[i]] === undefined){
                    month3.push([specificDayLine[i], 0])
                }else{
                    month3.push([specificDayLine[i], calendar_specific[id][specificDayLine[i]]])
                }
            }
        }
        total.push(month1, month2, month3)
        calendar_specific_detailnumber[id] = total
    }
    console.log(calendar_specific_detailnumber)
}

