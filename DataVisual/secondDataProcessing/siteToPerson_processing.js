
// qqq();

function qqq(){
    d3.json('./data/socail.json').then(function (data){
        console.log(data["50010110000001"][0])
        // for(let i=0; i<1; i++){
        //     for(let j=0; j<data[i].length; j++){
        //         console.log(data[i][j][""])
        //     }
        // }
    })
}