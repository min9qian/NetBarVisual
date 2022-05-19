// // function bottomPic_three() {
//
//
//
//     var center = new TMap.LatLng(34.40787, 89.269029);
//
//     //初始化地图
//     map3 = new TMap.Map("container3", {
//         zoom: 5,//设置地图缩放级别
//         pitch: 30,
//         center: center,//设置地图中心点坐标
//         mapStyleId: "style1" //个性化样式
//     });
//
//     // //移除缩放和旋转控件
//     map3.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM)
//     map3.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ROTATION)
//
//     //散点
//     var dot = new TMap.visualization.Dot({
//         faceTo:"screen",//散点固定的朝向
//         selectOptions: { //拾取配置
//             action: 'click', //拾取动作
//             style: { //选中样式
//                 fillColor: "#1cd5ff",
//                 radius: 10 //原型半径
//             },
//             enableHighlight: false //是否使用高亮效果
//         },
//     })
//         .addTo(map3)
//         .setData(processed_id);//设置数据
//
//
//     //处理数据并初始化弧线图并添加至map图层
//     d3.csv('./data/provinceNumber.csv').then(function (data) {
//         var riverData_all_final = [];
//
//         for(var i=0; i<data.length; i++){
//             riverData_all_final.push({ "to": { "lat": 29.533155, "lng": 106.504962 },
//                 "from": { "lat":  parseFloat(data[i]["纬度"]), "lng":parseFloat(data[i]["经度"])},
//                 "count": 5000})
//         }
//
//         line_river = new TMap.visualization.Arc({
//             mode: 'vertical', // 弧线平面与地平面垂直
//         })
//             .addTo(map3)
//             .setData(riverData_all_final);//设置数据
//     })
//
//
//     dot.on("click",function(evt){
//         if(evt.detail.dot){
//             info.innerHTML = evt.detail.dot.name +
//                 "<br><br>网吧编号：" + evt.detail.dot.siteid +
//                 "<br><br>经度：" + evt.detail.dot.lng +
//                 "<br><br>纬度：" + evt.detail.dot.lat;
//
//
//             // touch_drawPic_1(evt.detail.dot.siteid);
//
//             touch_drawPic_3(evt.detail.dot.siteid, evt.detail.dot.lng, evt.detail.dot.lat)
//
//         }else if(!evt.detail.dot){
//             info.innerHTML = "重庆市<br><br>" +
//                 "经度：106.504962<br><br>" +
//                 "维度：29.533155";
//         }
//     })
//     //初始化围墙线
//     var Wall3 = new TMap.visualization.Wall({
//         styles: {
//             style1: {
//                 color: new TMap.GradientColor({
//                     stops: {
//                         0: "rgba(1,124,247,0.6)",
//                         1: "rgba(29,250,242,1)",
//                     },
//                     angle: 90, //渐变色中的断点集合
//                 }),
//                 strokeColor: 'rgba(29,250,242,1)', //边线颜色
//                 strokeWidth: 2, //边线宽度
//             },
//         },
//         processAnimation: {
//             animationType: "breath", //动画类型名称
//             breathAmplitude: 0.5, //呼吸幅度
//             yoyo: true, //是否回弹
//             duration: 1000, //动画时长
//         },
//
//     })
//         .addTo(map3)
//     Wall3.setData([wallData]);
//
//
//     // left_draw_init_part3();//左图详细信息
// // }