// iii();


function iii(){
    let x = []
    let y = []
    console.log(origin_hot_netbar_data)
    let sorted = Object.keys(origin_hot_netbar_data).sort(function (a, b){
        return origin_hot_netbar_data[b] - origin_hot_netbar_data[a];
    })
    let count = 0; //只选30个
    for(let key of sorted){
        if(count === 30){
            break;
        }
        count++;
        x.push(key);
        y.push(origin_hot_netbar_data[key]);
    }
    console.log(x)
    console.log(y)
}