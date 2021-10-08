
function isIPv4Address(inputString) {

    var recebe = inputString.split('.');
    var conta = 0;
    if(recebe.length === 4) {
      for(var i = 0; i < recebe.length;i++) {
        if(Number(recebe[i]) >= 0 && Number(recebe[i]) <= 255 && recebe[i].length >=1) {
            conta++
        }
      }
    }

    if(conta !== 4) {
      return false
    }
    return true
}

console.log(isIPv4Address("172.316.254.1")) ;
