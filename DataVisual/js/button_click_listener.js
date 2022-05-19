var flag_bottomPic_Part;//用来判断当前是第几个界面
var map;//地图底图
var line_river;//流向线

d3.select('#button_7').on('click',()=>{
    document.getElementById('centerContainer').style.visibility = 'hidden';
})


//切换界面的监听事件
d3.selectAll("#button-group>div")
    .on("click",()=>{
        d3.selectAll("#button-group>div").classed('active',false)
        d3.selectAll("#button-group-2>div").classed('active',false)
        d3.select(d3.event.target).classed('active',true)

        listener_id = d3.event.target.id;

        if(listener_id === 'button_1'){
            document.getElementById('button-group-2').style.visibility="hidden";
            // HideAllContainers();
            visualAgeSexAboutLeftButtonAndRightPic();
            initContain1_Pic();
            visualLeftUpPic();
            visualLefDownPic();
            HideTable();
            HideSelectDiv();
            dot1();


            // document.getElementById('container1').style.visibility="visible";

        }else if(listener_id === 'button_2'){
            document.getElementById('button-group-2').style.visibility="visible";
            // HideAllContainers();
            HideAgeSexAboutLeftButtonAndRightPic();
            initContain2_Pic();
            visualLeftUpPic();
            HideLeftDownPic();
            HideTable();
            HideSelectDiv();
            dot2();

            // document.getElementById('container2').style.visibility="visible";

        }else if(listener_id === 'button_3'){
            document.getElementById('button-group-2').style.visibility="hidden";
            // HideAllContainers();
            HideAgeSexAboutLeftButtonAndRightPic();
            visualLeftUpPic();
            HideLeftDownPic();
            HideTable();
            HideSelectDiv();
            initContain3_Pic();
            visualLeftUpPic();
            dot5();


            // document.getElementById('container3').style.visibility="visible";

        }else if(listener_id === 'button_6'){
            // document.getElementById('centerContainer').style.visibility = 'visible';
            document.getElementById('button-group-2').style.visibility="hidden";
            HideAgeSexAboutLeftButtonAndRightPic();
            HideTable();
            HideLeftUpPic();
            HideLeftDownPic();
            HideSelectDiv();
            dot6();

        }
    })

d3.selectAll("#button-group-2>div")
    .on("click",()=>{
        d3.selectAll("#button-group-2>div").classed('active',false)
        d3.select(d3.event.target).classed('active',true)

        listener_id = d3.event.target.id;

        if(listener_id === 'button_4'){
            // HideAllContainers();
            HideAgeSexAboutLeftButtonAndRightPic();
            visualLeftUpPic();
            HideLeftDownPic();
            HideSelectDiv();
            dot3()


            // document.getElementById('container4').style.visibility="visible";

        }else if(listener_id === 'button_5'){
            // HideAllContainers();
            HideAgeSexAboutLeftButtonAndRightPic();
            visualLeftUpPic();
            HideLeftDownPic();
            HideSelectDiv();
            dot4();


            // document.getElementById('container5').style.visibility="visible";

        }
    })
