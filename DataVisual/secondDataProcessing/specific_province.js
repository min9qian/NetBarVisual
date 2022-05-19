// mmm();

function mmm(){

    d3.json('./data/netbar_online_data.json').then(function (data1) {


        let specific_province = {}

        for (let m = 0; m < netbar_siteId.length; m++) {

            if (data1[netbar_siteId[m]] === undefined) {
                continue;
            }

            specific_hometown = []
            specific_hometown_data = []
            specific_hometown_links = []

            specific_hometown = data1[netbar_siteId[m]][(data1[netbar_siteId[m]].length)-2]["hometown"]

            for(var key in specific_hometown){
                specific_hometown_data.push({name: key})
                specific_hometown_links.push({source: "重庆市",
                    target: key,
                    value: specific_hometown[key]})
            }

            specific_hometown_data.push({name:"重庆市"})

            specific_province[netbar_siteId[m]]= {
                specific_hometown_data: specific_hometown_data,
                specific_hometown_links: specific_hometown_links,

            }


        }

        return specific_province;



        // province_riverPic_2(specific_hometown_data, specific_hometown_links);
        // visualLeftPic();

    }).then((data) => {
        console.log(JSON.stringify(data))

    })

}