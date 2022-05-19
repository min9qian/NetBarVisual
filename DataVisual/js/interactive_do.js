//数据分析
function touch_drawPic_1(id) {
    d3.json('./data/specific_sex_age.json').then(function (data) {
        if(data[id] === undefined){
            alert('该网吧不存在数据');
            return;
        }

        console.log(highhourSpecific_options_processed["50010510000190"])
        //调用对应画图方法
        high_time_24(highhourSpecific_timeline_processed[id],highhourSpecific_options_processed[id])
        number_calendar(CalendarSpecific_processed[id]);
        // male_female_barPic(data[id]["male"], data[id]["female"], data[id]["daytime"]);


        legend_data = ['Age：0-6', 'Age：7-17', 'Age：18-29', 'Age：30-39', 'Age：40-59', 'Age>=60']
        age_barPic(data[id]["daytime"], data[id]["age"], legend_data);
        visualLefDownPic();

    })
    // d3.json('./data/netbar_online_data.json').then(function (data) {
    //
    //     if(data[id] === undefined){
    //         alert('该网吧无数据！');
    //         return;
    //     }
    //
    //     daytime = []
    //     male = []
    //     female = []
    //
    //     let sortData = data[id].sort(function(a,b){
    //         return a.date > b.date ? 1 : -1;
    //     })
    //
    //     //得到日期，男女数量数据
    //     for(var i=0; i<(sortData.length)-2; i++){
    //         daytime.push(sortData[i]["date"])
    //         male.push(sortData[i]["male"])
    //         female.push(sortData[i]["female"])
    //     }
    //
    //     //得到age数据
    //     age = []
    //     for(var i=0; i<(sortData[i]["age"]).length; i++)
    //     {
    //         age[i] = []
    //     }
    //     index_age = 0
    //     for(var i=0; i<(sortData.length)-2; i++){
    //         for(var j=0; j<(sortData[i]["age"]).length; j++) {
    //             age[j][index_age] = sortData[i]["age"][j];
    //         }
    //         index_age++;
    //     }
    //
    //     //调用对应画图方法
    //     male_female_barPic(male, female, daytime);
    //
    //     legend_data = ['Age：0-6', 'Age：7-17', 'Age：18-29', 'Age：30-39', 'Age：40-59', 'Age>=60']
    //     age_barPic(daytime, age, legend_data);
    //
    // })
}

//数据分析
function touch_drawPic_2(id) {
    d3.json('./data/specific_unaged.json').then(function (data) {
        if(data[id] === undefined){
            alert('该网吧无数据！');
            return;
        }

        minorPic_2(data[id]["dateofunaged"], data[id]["num_per_day_unaged"], data[id]["online_time_per_day_unaged"]);
        visualLefDownPic();
    })
    // d3.json('./data/netbar_direct_minor_info.json').then(function (data) {
    //     if(data[id] === undefined){
    //         alert('该网吧无数据！');
    //         return;
    //     }
    //
    //
    //     let dateofunaged = []
    //     let num_per_day_unaged = []
    //     let online_time_per_day_unaged = []
    //
    //     let sortData = data[id].sort(function(a,b){
    //         return a.date > b.date ? 1 : -1;
    //     })
    //
    //     for(var i=0; i<sortData.length; i++){
    //         dateofunaged.push(sortData[i]["date"])
    //         num_per_day_unaged.push(sortData[i]["num_per_day"])
    //         online_time_per_day_unaged.push(sortData[i]["online_time_per_day"])
    //     }
    //
    //
    //     minorPic_2(dateofunaged, num_per_day_unaged, online_time_per_day_unaged);
    //     visualLeftPic();
    // })

}



//数据分析
function touch_drawPic_3(id, lng, lat) {

    d3.csv('./data/provinceNumber.csv').then(function (data) {
        d3.json('./data/specific_province.json').then(function (data1) {

            if(data1[id] === undefined){
                alert('该网吧无数据！');
                return;
            }

            line_river.remove();

            specific_hometown_data = data1[id]["specific_hometown_data"]
            specific_hometown_links = data1[id]["specific_hometown_links"]
            specific_riverData_all_final_each = []

            var specific_hometown_data_name = []
            for(var i=0;i<specific_hometown_data.length;i++){
                specific_hometown_data_name.push(specific_hometown_data[i]["name"])
            }
            // console.log(specific_hometown_data_name)
            for(var i=0; i<data.length; i++){
                if(specific_hometown_data_name.includes(data[i]["省份"])){
                    specific_riverData_all_final_each.push({ "to": { "lat": lat, "lng": lng },
                        "from": { "lat":  parseFloat(data[i]["纬度"]), "lng":parseFloat(data[i]["经度"])},
                        "count": 5000})
                }
            }

            line_river = new TMap.visualization.Arc({
                mode: 'vertical' // 弧线平面与地平面垂直

            })
                .addTo(map1)
                .setData(specific_riverData_all_final_each);//设置数据



            province_riverPic_2(specific_hometown_data, specific_hometown_links);
            visualLefDownPic();
        })
    })


    // d3.csv('./data/provinceNumber.csv').then(function (data) {
    //     d3.json('./data/netbar_online_data.json').then(function (data1) {
    //
    //         if(data1[id] === undefined){
    //             alert('该网吧无数据！');
    //             return;
    //         }
    //
    //         line_river.destroy();
    //         var riverData_all_final_each = [];
    //         specific_hometown = []
    //         specific_hometown_data = []
    //         specific_hometown_links = []
    //         specific_hometown = data1[id][(data1[id].length)-2]["hometown"]
    //         specific_riverData_all_final_each = []
    //         for(var key in specific_hometown){
    //             specific_hometown_data.push({name: key})
    //             specific_hometown_links.push({source: "重庆市",
    //                 target: key,
    //                 value: specific_hometown[key]})
    //         }
    //         console.log(specific_hometown_data)
    //         var specific_hometown_data_name = []
    //         for(var i=0;i<specific_hometown_data.length;i++){
    //             specific_hometown_data_name.push(specific_hometown_data[i]["name"])
    //         }
    //         console.log(specific_hometown_data_name)
    //         for(var i=0; i<data.length; i++){
    //             if(specific_hometown_data_name.includes(data[i]["省份"])){
    //                 specific_riverData_all_final_each.push({ "to": { "lat": lat, "lng": lng },
    //                     "from": { "lat":  parseFloat(data[i]["纬度"]), "lng":parseFloat(data[i]["经度"])},
    //                     "count": 5000})
    //             }
    //         }
    //
    //         line_river = new TMap.visualization.Arc({
    //             mode: 'vertical' // 弧线平面与地平面垂直
    //
    //         })
    //             .addTo(map3)
    //             .setData(specific_riverData_all_final_each);//设置数据
    //
    //         specific_hometown_data.push({name:"重庆市"})
    //
    //
    //         province_riverPic_2(specific_hometown_data, specific_hometown_links);
    //         visualLeftPic();
    //     })
    // })
}


function touch_drawPic_4(id){
    select_button_detail(id);
    visualLeftUpPic();
    visualTable();
}


