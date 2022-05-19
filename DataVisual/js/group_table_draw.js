// //添加标签
// let select_part = document.getElementById("pid");
// for(let i=0; i<social_group.length; i++){
//     let option_part = document.createElement('option')
//     option_part.setAttribute('value', i)
//     option_part.textContent = "可疑社团" + (i+1)
//     select_part.append(option_part)
// }
// gradeChange()
//
// function gradeChange() {
//     var objS = document.getElementById("pid");
//     var value = objS.options[objS.selectedIndex].value;
//
//     let div = document.getElementById('centerTableDiv')
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
//         tbody_content += "<tr>" +
//             "        <th scope=\"row\">" + j + "</th>" +
//             "        <td>" + social_group[value][0][j][0] + "</td>" +
//             "        <td>" + social_group[value][0][j][1] + "</td>" +
//             "        </tr>"
//     }
//
//     tbody.innerHTML = tbody_content
// }