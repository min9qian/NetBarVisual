let social_group_siteId;

function select_button_detail(id){
    //添加标签

    social_group_siteId = id;
    let select_part = document.getElementById("select-part");
    select_part.innerHTML = ""
    for(let i=0; i<social_group[id].length; i++){
        let option_part = document.createElement('option')
        option_part.setAttribute('value', i)
        option_part.textContent = "可疑团伙" + (i+1)
        select_part.append(option_part)
    }

    social_group_barchart(each_netbar_group_barchart[social_group_siteId][0], each_netbar_group_barchart[social_group_siteId][1])
    table_group(social_group_siteId, 0);

}

function IndexChange(){
    let objS = document.getElementById("select-part");
    let value = objS.options[objS.selectedIndex].value;
    console.log(value)

    social_group_barchart(each_netbar_group_barchart[social_group_siteId][value*2], each_netbar_group_barchart[social_group_siteId][value*2 + 1])
    table_group(social_group_siteId, value);
}