var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
var i = 0;
var answer = 0;
end = () =>{
    client.on('close', function() {
        console.log('Connection closed');
       });
       
}
send = () => {
    client.on('data', function(data) {
        answer++
    console.log("DATA : " + data)
        console.log("SEND : " + answer)
        if(data=='OK'){
        console.log("DATA : OK " )
           client.write(''+answer);
        }else if(data == 'WRONG'){
            console.log("DATA : WRONG " )
           client.write(''+answer);
        }else if(data == 'BINGO'){
           console.log("BINGO : " + answer)
           client.destroy();
           end()
        }else if(data == 'END'){
            client.destroy();
           
        }
        if(i==4){
           client.destroy();
           connect()
           
           i=0;
        }
        i++
       });
       
}
 
connect = () =>{
    client.connect(PORT, HOST, function() {
        console.log('CONNECTED TO: ' + HOST + ':' + PORT);
        client.write('5735512017');
     });
     send()
}
connect()