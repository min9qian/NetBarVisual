// ooo();
//
// console.log(highhourSpecific_timeline_processed["50010510000190"])
// console.log(highhourSpecific_options_processed["50010510000190"])
//
//

// let xxx = Object.keys(highHour_specific["50010510000190"]).sort(function(a,b){return highHour_specific["50010510000190"][b]-highHour_specific["50010510000190"][a]})
//
// console.log(xxx)

function ooo(){

    let highHour_specific_timeLine = {}
    let highHour_specific_options = {}

    for(let i in highHour_specific){
        // console.log(highHour_specific[i])
        let timeLine = []
        let OptionsLine = []

        for(let index in specificDayLine){ //遍历每个ID的时间

            if(highHour_specific[i][specificDayLine[index]] === undefined){

            }else{
                timeLine.push(specificDayLine[index])
                let dataLine = []

                for(let k=0; k<24; k++){
                    let tempstr
                    if(k<10){
                        tempstr = '0' + k.toString()
                    }else{
                        tempstr = k.toString()
                    }
                    if(tempstr in highHour_specific[i][specificDayLine[index]]){
                        dataLine.push(highHour_specific[i][specificDayLine[index]][tempstr])
                    }else{
                        dataLine.push(0)
                    }
                }
                OptionsLine.push({
                    "series":[
                        {
                            "data":dataLine
                        }
                    ]
                })
            }
        }
        highHour_specific_timeLine[i] = timeLine
        highHour_specific_options[i] = OptionsLine
    }
    console.log(highHour_specific_timeLine)
    console.log(JSON.stringify(highHour_specific_options))

}