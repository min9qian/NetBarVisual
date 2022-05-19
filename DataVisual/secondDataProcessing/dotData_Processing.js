// siteId_first_pic_doc
// dotData

// zzz();

function zzz(){

    first_pic_dotdata = []
    for(let i=0; i<siteId_first_pic_doc.length; i++){
        for(let j=0; j<dotData.length; j++){
            if(siteId_first_pic_doc[i] === dotData[j]["siteid"]){
                first_pic_dotdata.push(
                    {
                        siteid:dotData[j]["siteid"],
                        name:dotData[j]["name"],
                        lat:dotData[j]["lat"],
                        lng:dotData[j]["lng"]
                    }
                )
            }
        }
    }

}