// ttt();


function ttt(){


    //处理得到柱状图的数据
    let each_netbar = {};
    for(let SITEID in social_group){  //遍历每个网吧
        let each_group = []
        for(let i=0; i<social_group[SITEID].length; i++){ //遍历每个网吧的每个社团
            let each_personOfGroup_id = []
            let each_personOfGroup_time = []
            for(let j in social_group[SITEID][i][0]){ //遍历每个社团的每个人
                each_personOfGroup_id.push(j);
                each_personOfGroup_time.push(social_group[SITEID][i][0][j][1] - social_group[SITEID][i][0][j][0])
                // console.log(j)//取得personId
                // console.log(social_group[SITEID][i][0][j])//取得时间[start, end]
            }
            each_group.push(each_personOfGroup_id,each_personOfGroup_time);
            // console.log(social_group[SITEID][i])
        }
        each_netbar[SITEID] = each_group
        // console.log(social_group[SITEID])
    }
    console.log(each_netbar)


    //处理得到table的数据
    let fortable_each_netbar = {};
    for(let SITEID in social_group){  //遍历每个网吧
        let each_group = []
        for(let i=0; i<social_group[SITEID].length; i++){ //遍历每个网吧的每个社团
            let each_person = []
            for(let j in social_group[SITEID][i][0]){ //遍历每个社团的每个人
                each_person.push(j);
                each_person.push(social_group[SITEID][i][0][j][0])
                each_person.push(social_group[SITEID][i][0][j][1])
                // console.log(j)//取得personId
                // console.log(social_group[SITEID][i][0][j])//取得时间[start, end]
            }
            each_group.push(each_person);
            // console.log(social_group[SITEID][i])
        }
        fortable_each_netbar[SITEID] = each_group
        // console.log(social_group[SITEID])
    }
    console.log(fortable_each_netbar)





    // //处理dot点的经纬度绘制点
    // social_siteid = []
    // for(let SITEID in social_group){
    //     social_siteid.push(SITEID)
    //     console.log(social_group[SITEID])
    // }
    //
    //
    // let social_pic_dotdata = []
    // for(let i=0; i<social_siteid.length; i++){
    //     for(let j=0; j<dotData.length; j++){
    //
    //         if(social_siteid[i] === (dotData[j]["siteid"]).toString()){
    //             social_pic_dotdata.push(
    //                 {
    //                     siteid:dotData[j]["siteid"],
    //                     name:dotData[j]["name"],
    //                     lat:dotData[j]["lat"],
    //                     lng:dotData[j]["lng"]
    //                 }
    //             )
    //         }
    //     }
    // }



    //添加标签
    // let select_part = document.getElementById("pid");
    // for(let i=0; i<social_group.length; i++){
    //     let option_part = document.createElement('option')
    //     option_part.setAttribute('value', i)
    //     option_part.textContent = "可疑社团" + (i+1)
    //     select_part.append(option_part)
    // }


}

// function gradeChange() {
//     var objS = document.getElementById("pid");
//     var value = objS.options[objS.selectedIndex].value;
//
//     let div = document.getElementById('table_div')
//     div.style.color = "#FFFFFF"
//     div.innerHTML = ""
//
//     let table = document.createElement('table')
//     table.setAttribute('id', 'table')
//     table.setAttribute('class', 'table table-hover')
//
//     let thead = document.createElement('thead')
//
//     let tbody = document.createElement('tbody')
//     tbody.setAttribute('id', 'tableBody')
//
//     let title = document.createElement('text')
//     title.setAttribute('id', 'title_detail')
//
//     div.appendChild(title)
//     div.appendChild(table)
//     table.appendChild(thead)
//     table.appendChild(tbody)
//
//     let title_content = "疑似社团的团伙人员信息"
//     title.innerHTML = title_content
//
//     let thead_content =
//         "    <tr>" +
//         "        <th scope=\"col\">PERSONID</th>" +
//         "        <th scope=\"col\">ONLINETIME</th>" +
//         "        <th scope=\"col\">OFFLINETIME</th>" +
//         "    </tr>"
//     thead.innerHTML = thead_content
//
//     let tbody_content = ""
//     for(let j in social_group[value][0]){
//         console.log(j)
//         tbody_content += "<tr>" +
//             "        <th scope=\"row\">" + j + "</th>" +
//             "        <td>" + social_group[value][0][j][0] + "</td>" +
//             "        <td>" + social_group[value][0][j][1] + "</td>" +
//             "        </tr>"
//     }
//
//     tbody.innerHTML = tbody_content
//
//
//
// }
//
// function timeProcessing(time_line){
//     let timeStart = time_line[0].toString().replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, "$1-$2-$3 $4:$5:$6")
//     let timeEnd = time_line[1].toString().replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, "$1-$2-$3 $4:$5:$6")
//     return [timeStart, timeEnd]
//
// }
//
