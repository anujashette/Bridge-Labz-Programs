var fs=require('fs')
//Asychronous / non blocking (Read Write to and from file)
fs.readFile('demo.txt','utf8',function(err,ata){
    console.log(ata)
fs.writeFile('write.txt',ata)
});

//Synchonous / blocking

var data = fs.readFileSync('demo.txt','utf8')
 fs.writeFileSync('write.txt',data)

 //


 
