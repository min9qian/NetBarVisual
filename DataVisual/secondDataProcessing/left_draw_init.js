function left_draw_init_part1() {
    d3.json('./data/netbar_online_data.json').then(function (data) {
        provinve = []
        cityNumber = 0
        cityNumber_line = []
        male = 0
        male_line = []
        female = 0
        female_line = []

        for(var key in data){
            cityNumber = key.substring(0,6);
            male = data[key][data[key].length-2]["male"];
            female = data[key][data[key].length-2]["female"];

            if(cityNumber_line.includes(cityNumber)){
                male_line[cityNumber] += male;
                female_line[cityNumber] += female;
            }else{
                cityNumber_line.push(cityNumber);
                male_line[cityNumber] = 0;
                female_line[cityNumber] = 0;
            }
        }

        male_line_temp = {}
        female_line_temp = {}
        d3.csv('./data/cityNumber.csv').then(function (data_proName) {
            for(var i=0; i<data_proName.length; i++){
                for(var index in male_line){
                    if(data_proName[i]["areaCode"] == index){
                        male_line_temp[data_proName[i]["areaName"]] = male_line[index];
                        female_line_temp[data_proName[i]["areaName"]] = female_line[index];
                    }
                }
            }

            male_final = []
            female_final = []

            for(var key_man in male_line_temp){
                male_final.push(male_line_temp[key_man])
                female_final.push(female_line_temp[key_man])
                provinve.push(key_man)
            }
            // console.log(male_final)
            // console.log(female_final)
            // console.log(provinve)

            // male_female_barPic(male_final, female_final, provinve);
        })


        age =  []
        age_line = {}
        age_cityNumber = []
        age_temp = {}
        for(var key in data){
            cityNumber = key.substring(0,6);
            age = data[key][(data[key].length)-2]["age"];
            if(age_cityNumber.includes(cityNumber)){
                temp = age_line[cityNumber];
                age = addTwoString(temp, age);
                age_line[cityNumber] = age;
            }else{
                age_cityNumber.push(cityNumber);
                age_line[cityNumber] = age;
            }

        }

        function addTwoString(arr1, arr2) {
            for(var i=0; i<arr1.length; i++){
                arr2[i] += arr1[i];
            }
            return arr2;
        }

        d3.csv('./data/cityNumber.csv').then(function (data_proName) {
            for(var i=0; i<data_proName.length; i++){
                for(var index in age_line){
                    if(data_proName[i]["areaCode"] == index){
                        age_temp[data_proName[i]["areaName"]] = age_line[index];
                    }
                }
            }

            age_final = []
            city_final = []
            age_result = []

            for(var key_city in age_temp){
                age_final.push(age_temp[key_city])
                city_final.push(key_city)
            }

            //将得到的age_final数组90°旋转
            for(var i=0; i<age_final[0].length; i++){
                age_result[i] = []
            }

            for(var i=0; i<age_final.length; i++){
                for(var j=0; j<age_final[i].length; j++){
                    age_result[j][i] = age_final[i][j]
                }
            }
            age_final_result = []
            for(var i=0; i<age_result.length; i++){
                age_final_result[age_result.length-i-1] = age_result[i];
            }

            legend_data = ['Age：0-6', 'Age：7-17', 'Age：18-29', 'Age：30-39', 'Age：40-59', 'Age>=60']

            // console.log(city_final)
            // console.log(age_result)
            // console.log(legend_data)
            // age_barPic(city_final, age_result, legend_data)
        })
    })
}

function left_draw_init_part2() {
    d3.json('./data/total_netar_direct_minor_info.json').then(function (data) {

        // console.log(data["total_city"][0])
        // console.log(data["total_city"][1])
        // console.log(data["total_city"][2])
        // minorPic(data["total_city"][0],data["total_city"][1],data["total_city"][2])
    })

    var myChart = echarts.init(document.getElementById('pic2'));
    myChart.clear();
}

function left_draw_init_part3() {
    d3.json('./data/netbar_online_data.json').then(function (data) {

        // 外来人口部分图
        hometown = []
        hometown_data = []
        hometown_links = []
        judge_name = []
        judge_name1 = []
        temp_hometown = []
        for(var key1 in data){
            hometown = data[key1][(data[key1].length)-2]["hometown"]
            for(var key2 in hometown){
                if(judge_name.includes(key2)){
                    temp_hometown[key2] += hometown[key2];
                    //不做处理
                }else{
                    judge_name.push(key2)
                    temp_hometown[key2] = 0;
                }
            }
        }
        for(var key1 in data){
            hometown = data[key1][(data[key1].length)-2]["hometown"]
            for(var key3 in hometown){
                if(judge_name1.includes(key3)){
                    //不做处理
                }else{
                    judge_name1.push(key3)
                    if(key3 != "N/A") {
                        hometown_data.push({name: key3})
                        hometown_links.push({source: "重庆市",
                            target: key3,
                            value: temp_hometown[key3]})
                    }
                }
            }
        }
        hometown_data.push({name: "重庆市"})

        // console.log(hometown_data)
        // console.log(hometown_links)
        // province_riverPic(hometown_data, hometown_links);
    })

    var myChart = echarts.init(document.getElementById('pic2'));
    myChart.clear();
}