const data=`[{"id":1,"first_name":"Jehu","last_name":"Leneve","email":"jleneve0@walmart.com","gender":"Male","ip_address":"28.90.98.62","salary":12},
{"id":2,"first_name":"Opal","last_name":"Akers","email":"oakers1@craigslist.org","gender":"Female","ip_address":"221.123.137.53","salary":19},
{"id":3,"first_name":"Westbrook","last_name":"Rivilis","email":"wrivilis2@washington.edu","gender":"Male","ip_address":"75.120.192.145","salary":87},
{"id":4,"first_name":"Gabi","last_name":"Briston","email":"gbriston3@wisc.edu","gender":"Male","ip_address":"12.19.53.24","salary":85},
{"id":5,"first_name":"Margareta","last_name":"Balasin","email":"mbalasin4@jimdo.com","gender":"Female","ip_address":"197.151.107.163","salary":88},
{"id":6,"first_name":"Donn","last_name":"Filon","email":"dfilon5@independent.co.uk","gender":"Male","ip_address":"146.246.57.157","salary":52},
{"id":7,"first_name":"Nancee","last_name":"Bernlin","email":"nbernlin6@bluehost.com","gender":"Female","ip_address":"218.70.189.141","salary":42},
{"id":8,"first_name":"Pegeen","last_name":"Greiser","email":"pgreiser7@dailymotion.com","gender":"Female","ip_address":"223.119.189.21","salary":59},
{"id":9,"first_name":"Frasco","last_name":"Moakes","email":"fmoakes8@printfriendly.com","gender":"Male","ip_address":"72.86.133.142","salary":59},
{"id":10,"first_name":"Nollie","last_name":"Dadley","email":"ndadley9@ask.com","gender":"Female","ip_address":"96.49.73.127","salary":21},
{"id":11,"first_name":"Jacquenette","last_name":"McVitie","email":"jmcvitiea@bloglovin.com","gender":"Female","ip_address":"108.248.81.68","salary":37},
{"id":12,"first_name":"Lyle","last_name":"Raynham","email":"lraynhamb@w3.org","gender":"Male","ip_address":"207.182.34.29","salary":43},
{"id":13,"first_name":"Thaine","last_name":"Bains","email":"tbainsc@geocities.com","gender":"Male","ip_address":"32.199.170.7","salary":69},
{"id":14,"first_name":"Cissiee","last_name":"Reaveley","email":"creaveleyd@about.me","gender":"Female","ip_address":"30.138.184.80","salary":61},
{"id":15,"first_name":"Phaedra","last_name":"Raoul","email":"praoule@bravesites.com","gender":"Female","ip_address":"180.253.127.223","salary":70}]`

let result = JSON.parse(data);

console.log(result)

let str=[]
result.forEach(element => {
   if(element.gender == 'Female' && element.salary>=50){
    str.push(element)
   }
    
});

console.log(str)