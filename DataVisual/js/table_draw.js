function table_coincide(id){
    // var myChart = echarts.init(document.getElementById('pic2'),'dark');
    // myChart.clear();
    d3.json("./data/detailInfo_coincide.json").then(function(data){
        // console.log(data[id])
        if(data[id] === undefined){
            alert('该网吧无数据！');
            return;
        }

        let div = document.getElementById('table_div')
        div.style.color = "#FFFFFF"
        div.innerHTML = ""

        let table = document.createElement('table')
        table.setAttribute('id', 'table')
        table.setAttribute('class', 'table table-hover')

        let thead = document.createElement('thead')

        let tbody = document.createElement('tbody')
        tbody.setAttribute('id', 'tableBody')

        let title = document.createElement('text')
        title.setAttribute('id', 'title_detail')

        div.appendChild(title)
        div.appendChild(table)
        table.appendChild(thead)
        table.appendChild(tbody)

        let title_content = "疑似未成年人上网的个人信息"
        title.innerHTML = title_content

        let thead_content =
            "    <tr>" +
            "        <th scope=\"col\">PERSONID</th>" +
            "        <th scope=\"col\">XB</th>" +
            "        <th scope=\"col\">CUSTOMERNAME</th>" +
            "        <th scope=\"col\">ONLINETIME</th>" +
            "        <th scope=\"col\">BIRTHDAY</th>" +
            "    </tr>"
        thead.innerHTML = thead_content

        let tbody_content = ""
        for(let i=0; i<data[id].length; i=i+5){
            // console.log(i)
            // console.log(data[id].length)
            tbody_content += "<tr>" +
                "        <th scope=\"row\">" + data[id][i] + "</th>" +
                "        <td>" + data[id][i+1] + "</td>" +
                "        <td>" + data[id][i+2] + "</td>" +
                "        <td>" + data[id][i+3] + "</td>" +
                "        <td>" + data[id][i+4] + "</td>" +
                "        </tr>"
            // console.log(tbody_content)


        }
        tbody.innerHTML = tbody_content
        visualTable();

    })
}

function table_succession(id){

    d3.json("./data/detailInfo_succession.json").then(function(data){

        if(data[id] === undefined){
            document.getElementById("right-up-container").style.visibility="hidden";
            document.getElementById("right-down-container").style.visibility="hidden";
            alert('该网吧无数据！');
            return;
        }

        let div = document.getElementById('table_div')
        div.style.color = "#FFFFFF"
        div.innerHTML = ""

        let table = document.createElement('table')
        table.setAttribute('id', 'table')
        table.setAttribute('class', 'table table-hover')

        let thead = document.createElement('thead')

        let tbody = document.createElement('tbody')
        tbody.setAttribute('id', 'tableBody')

        let title = document.createElement('text')
        title.setAttribute('id', 'title_detail')

        div.appendChild(title)
        div.appendChild(table)
        table.appendChild(thead)
        table.appendChild(tbody)

        let title_content = "疑似未成年人上网的个人信息"
        title.innerHTML = title_content

        let thead_content =
            "    <tr>" +
            "        <th scope=\"col\">PERSONID</th>" +
            "        <th scope=\"col\">XB</th>" +
            "        <th scope=\"col\">CUSTOMERNAME</th>" +
            "        <th scope=\"col\">ONLINETIME</th>" +
            "        <th scope=\"col\">BIRTHDAY</th>" +
            "    </tr>"
        thead.innerHTML = thead_content

        let tbody_content = ""
        for(let i=0; i<data[id].length; i=i+5){
            // console.log(i)
            // console.log(data[id].length)
            tbody_content += "<tr>" +
                "        <th scope=\"row\">" + data[id][i] + "</th>" +
                "        <td>" + data[id][i+1] + "</td>" +
                "        <td>" + data[id][i+2] + "</td>" +
                "        <td>" + data[id][i+3] + "</td>" +
                "        <td>" + data[id][i+4] + "</td>" +
                "        </tr>"
            // console.log(tbody_content)


        }
        tbody.innerHTML = tbody_content;
        visualTable();

    })
}

function table_group(id, value){

    let div = document.getElementById('table_div')
    div.style.color = "#FFFFFF"
    div.innerHTML = ""

    let table = document.createElement('table')
    table.setAttribute('id', 'table')
    table.setAttribute('class', 'table table-hover')

    let thead = document.createElement('thead')

    let tbody = document.createElement('tbody')
    tbody.setAttribute('id', 'tableBody')

    let title = document.createElement('text')
    title.setAttribute('id', 'title_detail')

    div.appendChild(title)
    div.appendChild(table)
    table.appendChild(thead)
    table.appendChild(tbody)

    let title_content = "团伙上网的个人信息"
    title.innerHTML = title_content

    let thead_content =
        "    <tr>" +
        "        <th scope=\"col\">PERSONID</th>" +
        "        <th scope=\"col\">ONLINETIME</th>" +
        "        <th scope=\"col\">OFFLINETIME</th>" +
        "    </tr>"
    thead.innerHTML = thead_content

    let tbody_content = ""

    for(let k=0; k<each_netbar_group_table[id][value].length; k=k+3){
        tbody_content += "<tr>" +
            "        <th scope=\"row\">" + each_netbar_group_table[id][value][k] + "</th>" +
            "        <td>" + each_netbar_group_table[id][value][k+1] + "</td>" +
            "        <td>" + each_netbar_group_table[id][value][k+2] + "</td>" +
            "        </tr>"
    }

    tbody.innerHTML = tbody_content;
    visualTable();

}