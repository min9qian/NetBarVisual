// // function bottomPic_two() {
//
//
//     var info = document.getElementById("info");
//     info.innerHTML = "重庆市<br><br>" +
//         "经度：106.504962<br><br>" +
//         "维度：29.533155";
//     var center = new TMap.LatLng(30.11378, 105.52907);
// //初始化地图
//     map2 = new TMap.Map("container2", {
//         zoom: 8,//设置地图缩放级别
//         minZoom: 8, //最小缩放级别
//         maxZoom: 20, //最大缩放级别
//         center: center,//设置地图中心点坐标
//         mapStyleId: "style1" //个性化样式
//     });
//
//     //移除缩放和旋转控件
//     map2.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM)
//     map2.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ROTATION)
//
//
//
//     var dot = new TMap.visualization.Dot({
//         faceTo:"screen",//散点固定的朝向
//         selectOptions: { //拾取配置
//             action: 'click', //拾取动作
//             style: { //选中样式
//                 fillColor: "#1cd5ff",//#DC143C
//                 radius: 10 //原型半径
//             },
//             enableHighlight: false //是否使用高亮效果
//         },
//     })
//         .addTo(map2)
//         .setData(direct_unaged_point);//设置数据
//
//     //绑定点击事件
//     dot.on("click",function(evt){
//         if(evt.detail.dot){
//             console.log("1111")
//             info.innerHTML = evt.detail.dot.name +
//                 "<br><br>网吧编号：" + evt.detail.dot.siteid +
//                 "<br><br>经度：" + evt.detail.dot.lng +
//                 "<br><br>纬度：" + evt.detail.dot.lat;
//
//
//
//
//             touch_drawPic_2(evt.detail.dot.siteid);
//
//         }else if(!evt.detail.dot && map2.getZoom()>8){
//             info.innerHTML = "重庆市<br><br>" +
//                 "经度：106.504962<br><br>" +
//                 "维度：29.533155";
//         }
//     })
//
//
//
//
//     //初始化围墙线
//     var Wall2 = new TMap.visualization.Wall({
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
//         .addTo(map2)
//     Wall2.setData([wallData]);
//
//
//
//
//
// // }