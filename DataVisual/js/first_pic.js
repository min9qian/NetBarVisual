// function bottomPic_one(){


    let info = document.getElementById("info");
    info.innerHTML = "重庆市<br><br>" +
        "经度：106.504962<br><br>" +
        "维度：29.533155";

    let center = new TMap.LatLng(30.11378, 107.52907);
    //初始化地图
    let map1 = new TMap.Map("container1", {
        zoom: 7.5,//设置地图缩放级别
        minZoom: 5, //最小缩放级别
        maxZoom: 20, //最大缩放级别
        center: center,//设置地图中心点坐标
        mapStyleId: "style1", //个性化样式
        // baseMap: {
        //     type: "vector",
        //     features: ["base", "building3d"], // 隐藏矢量文字
        // }
    });

    let dot;

    //移除缩放和旋转控件
    map1.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM)
    map1.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ROTATION)



    // center = new TMap.LatLng(30.11378, 122.52907);
    // map1.setCenter(center)
    // console.log(map1)

   function dot1(){

       center = new TMap.LatLng(30.11378, 107.52907);
       map1.setCenter(center)
       map1.setZoom(7.5)

       if(line_river){
           line_river.remove();
       }
       if(dot){
           dot.remove();
       }
       //初始化散点图并添加至map图层
       dot = new TMap.visualization.Dot({
           faceTo:"screen",//散点固定的朝向
           selectOptions: { //拾取配置
               action: 'click', //拾取动作
               style: { //选中样式
                   fillColor: "#1cd5ff",
                   radius: 10 //原型半径
               },
               enableHighlight: false //是否使用高亮效果
           },
       })
           .addTo(map1)
           .setData(processed_id);//设置数据

       //绑定点击事件
       dot.on("click",function(evt){
           if(evt.detail.dot){
               info.innerHTML = evt.detail.dot.name +
                   "<br><br>网吧编号：" + evt.detail.dot.siteid +
                   "<br><br>经度：" + evt.detail.dot.lng +
                   "<br><br>纬度：" + evt.detail.dot.lat;

               touch_drawPic_1(evt.detail.dot.siteid);

           }else if(!evt.detail.dot && map1.getZoom()>8){
               info.innerHTML = "重庆市<br><br>" +
                   "经度：106.504962<br><br>" +
                   "维度：29.533155";
           }
       })
   }

   function dot2(){


       center = new TMap.LatLng(30.11378, 105.52907);

       map1.setCenter(center)
       map1.setZoom(8)
       if(line_river){
           line_river.remove();
       }
       if(dot){
           dot.remove();
       }


       dot = new TMap.visualization.Dot({
           faceTo:"screen",//散点固定的朝向
           selectOptions: { //拾取配置
               action: 'click', //拾取动作
               style: { //选中样式
                   fillColor: "#1cd5ff",//#DC143C
                   radius: 10 //原型半径
               },
               enableHighlight: false //是否使用高亮效果
           },
       })
           .addTo(map1)
           .setData(direct_unaged_point);//设置数据

       //绑定点击事件
       dot.on("click",function(evt){
           if(evt.detail.dot){
               info.innerHTML = evt.detail.dot.name +
                   "<br><br>网吧编号：" + evt.detail.dot.siteid +
                   "<br><br>经度：" + evt.detail.dot.lng +
                   "<br><br>纬度：" + evt.detail.dot.lat;




               touch_drawPic_2(evt.detail.dot.siteid);

           }else if(!evt.detail.dot && map1.getZoom()>8){
               info.innerHTML = "重庆市<br><br>" +
                   "经度：106.504962<br><br>" +
                   "维度：29.533155";
           }
       })
   }


   function dot3(){
       center = new TMap.LatLng(30.11378, 105.52907);

       map1.setCenter(center)
       map1.setZoom(8)
       if(line_river){
           line_river.remove();
       }
       if(dot){
           dot.remove();
       }


       dot = new TMap.visualization.Dot({
           faceTo:"screen",//散点固定的朝向
           selectOptions: { //拾取配置
               action: 'click', //拾取动作
               style: { //选中样式
                   fillColor: "#1cd5ff",//#DC143C
                   radius: 10 //原型半径
               },
               enableHighlight: false //是否使用高亮效果
           },
       })
           .addTo(map1)
           .setData(CoincideId_unaged_data);//设置数据


       dot.on("click",function(evt){
           if(evt.detail.dot){
               info.innerHTML = evt.detail.dot.name +
                   "<br><br>网吧编号：" + evt.detail.dot.siteid +
                   "<br><br>经度：" + evt.detail.dot.lng +
                   "<br><br>纬度：" + evt.detail.dot.lat;


               table_coincide(evt.detail.dot.siteid);

               // touch_drawPic_2(evt.detail.dot.siteid);
           }else if(!evt.detail.dot && map1.getZoom()>8){
               info.innerHTML = "重庆市<br><br>" +
                   "经度：106.504962<br><br>" +
                   "维度：29.533155";
           }
       })
   }

   function dot4(){
       center = new TMap.LatLng(30.11378, 105.52907);

       map1.setCenter(center)
       map1.setZoom(8)
       if(line_river){
           line_river.remove();
       }
       if(dot){
           dot.remove();
       }


       dot = new TMap.visualization.Dot({
           faceTo:"screen",//散点固定的朝向
           selectOptions: { //拾取配置
               action: 'click', //拾取动作
               style: { //选中样式
                   fillColor: "#1cd5ff",//#DC143C
                   radius: 10 //原型半径
               },
               enableHighlight: false //是否使用高亮效果
           },
       })
           .addTo(map1)
           .setData(SuccessionId_unaged_data);//设置数据

//绑定点击事件
       dot.on("click",function(evt){
           if(evt.detail.dot){
               info.innerHTML = evt.detail.dot.name +
                   "<br><br>网吧编号：" + evt.detail.dot.siteid +
                   "<br><br>经度：" + evt.detail.dot.lng +
                   "<br><br>纬度：" + evt.detail.dot.lat;


               table_succession(evt.detail.dot.siteid);

               // touch_drawPic_2(evt.detail.dot.siteid);
           }else if(!evt.detail.dot && map1.getZoom()>8){
               info.innerHTML = "重庆市<br><br>" +
                   "经度：106.504962<br><br>" +
                   "维度：29.533155";
           }
       })
   }

   function dot5(){

       center = new TMap.LatLng(34.40787, 89.269029);
       map1.setCenter(center)
       map1.setZoom(5)
       if(line_river){
           line_river.remove();
       }
       if(dot){
           dot.remove();
       }


       //散点
       dot = new TMap.visualization.Dot({
           faceTo:"screen",//散点固定的朝向
           selectOptions: { //拾取配置
               action: 'click', //拾取动作
               style: { //选中样式
                   fillColor: "#1cd5ff",
                   radius: 10 //原型半径
               },
               enableHighlight: false //是否使用高亮效果
           },
       })
           .addTo(map1)
           .setData(processed_id);//设置数据


       //处理数据并初始化弧线图并添加至map图层
       d3.csv('./data/provinceNumber.csv').then(function (data) {
           var riverData_all_final = [];

           for(var i=0; i<data.length; i++){
               riverData_all_final.push({ "to": { "lat": 29.533155, "lng": 106.504962 },
                   "from": { "lat":  parseFloat(data[i]["纬度"]), "lng":parseFloat(data[i]["经度"])},
                   "count": 5000})
           }

           line_river = new TMap.visualization.Arc({
               mode: 'vertical', // 弧线平面与地平面垂直
           })
               .addTo(map1)
               .setData(riverData_all_final);//设置数据
       })


       dot.on("click",function(evt){
           if(evt.detail.dot){
               info.innerHTML = evt.detail.dot.name +
                   "<br><br>网吧编号：" + evt.detail.dot.siteid +
                   "<br><br>经度：" + evt.detail.dot.lng +
                   "<br><br>纬度：" + evt.detail.dot.lat;


               // touch_drawPic_1(evt.detail.dot.siteid);

               touch_drawPic_3(evt.detail.dot.siteid, evt.detail.dot.lng, evt.detail.dot.lat)

           }else if(!evt.detail.dot){
               info.innerHTML = "重庆市<br><br>" +
                   "经度：106.504962<br><br>" +
                   "维度：29.533155";
           }
       })
   }

    function dot6(){


        center = new TMap.LatLng(30.11378, 105.52907);

        map1.setCenter(center)
        map1.setZoom(8)
        if(line_river){
            line_river.remove();
        }
        if(dot){
            dot.remove();
        }


        dot = new TMap.visualization.Dot({
            faceTo:"screen",//散点固定的朝向
            selectOptions: { //拾取配置
                action: 'click', //拾取动作
                style: { //选中样式
                    fillColor: "#1cd5ff",//#DC143C
                    radius: 10 //原型半径
                },
                enableHighlight: false //是否使用高亮效果
            },
        })
            .addTo(map1)
            .setData(social_pic_dot);//设置数据

        //绑定点击事件
        dot.on("click",function(evt){
            if(evt.detail.dot){
                info.innerHTML = evt.detail.dot.name +
                    "<br><br>网吧编号：" + evt.detail.dot.siteid +
                    "<br><br>经度：" + evt.detail.dot.lng +
                    "<br><br>纬度：" + evt.detail.dot.lat;



                touch_drawPic_4(evt.detail.dot.siteid);
                visualSelectDiv();

            }else if(!evt.detail.dot && map1.getZoom()>8){
                info.innerHTML = "重庆市<br><br>" +
                    "经度：106.504962<br><br>" +
                    "维度：29.533155";
            }
        })
    }



    //绘制城墙
    var path = convertToPath(wallLine);

    var wallData = {
        path: path, //	经纬度数组
        height: 4500, //围墙面高度
        styleId: "style1", //围墙面样式配置id
    };

    //初始化围墙线
    var Wall = new TMap.visualization.Wall({
        styles: {
            style1: {
                color: new TMap.GradientColor({
                    stops: {
                        0: "rgba(1,124,247,0.6)",
                        1: "rgba(29,250,242,1)",
                    },
                    angle: 90, //渐变色中的断点集合
                }),
                strokeColor: 'rgba(29,250,242,1)', //边线颜色
                strokeWidth: 2, //边线宽度
            },
        },
        processAnimation: {
            animationType: "breath", //动画类型名称
            breathAmplitude: 0.5, //呼吸幅度
            yoyo: true, //是否回弹
            duration: 1000, //动画时长
        },

    })
        .addTo(map1)
    Wall.setData([wallData]);

    function convertToPath(array) {
        return array.map((p) => {
            if (p.length == 2) return new TMap.LatLng(p[0], p[1]);
            if (p.length == 3) return new TMap.LatLng(p[0], p[1], p[2]);
        });
    }



    // left_draw_init_part1(); //左部分图初始化
// }


