// kkk();

// console.log(specific_man)

function kkk() {
    d3.json('./data/netbar_online_data.json').then(function (data) {
        let specific_man = {};

        for (let m = 0; m < netbar_siteId.length; m++) {
            if (data[netbar_siteId[m]] === undefined) {
                continue;
            }

            daytime = []
            male = []
            female = []

            let sortData = data[netbar_siteId[m]].sort(function (a, b) {
                return a.date > b.date ? 1 : -1;
            })

            //得到日期，男女数量数据
            for (var i = 0; i < (sortData.length) - 2; i++) {
                daytime.push(sortData[i]["date"])
                male.push(sortData[i]["male"])
                female.push(sortData[i]["female"])
            }

            // 得到age数据
            age = []
            for (var i = 0; i < 6; i++) {
                age[i] = []
            }
            index_age = 0
            for (var i = 0; i < (sortData.length) - 2; i++) {
                for (var j = 0; j < (sortData[i]["age"]).length; j++) {
                    age[j][index_age] = sortData[i]["age"][j];
                }
                index_age++;
            }

            specific_man[netbar_siteId[m]]= {
                male: male,
                female: female,
                daytime: daytime,
                age:age
            }


        }


        return specific_man;
    }).then((data) => {
        console.log(JSON.stringify(data))

    })
}