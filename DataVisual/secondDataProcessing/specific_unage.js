// uuu();

function uuu(){
    d3.json('./data/netbar_direct_minor_info.json').then(function (data) {

        // console.log(data)
        let specific_unaged = {};

        for (let m = 0; m < netbar_siteId.length; m++) {

            if (data[netbar_siteId[m]] === undefined) {
                continue;
            }

            let dateofunaged = []
            let num_per_day_unaged = []
            let online_time_per_day_unaged = []
            console.log(data[netbar_siteId[m]])

            let sortData = data[netbar_siteId[m]].sort(function(a,b){
                return a.date > b.date ? 1 : -1;
            })

            for(var i=0; i<sortData.length; i++){
                dateofunaged.push(sortData[i]["date"])
                num_per_day_unaged.push(sortData[i]["num_per_day"])
                online_time_per_day_unaged.push(sortData[i]["online_time_per_day"])
            }

            specific_unaged[netbar_siteId[m]]= {
                dateofunaged: dateofunaged,
                num_per_day_unaged: num_per_day_unaged,
                online_time_per_day_unaged: online_time_per_day_unaged,
            }


        }


        return specific_unaged;
        // minorPic_2(dateofunaged, num_per_day_unaged, online_time_per_day_unaged);
    }).then((data) => {
        console.log(JSON.stringify(data))

    })

}