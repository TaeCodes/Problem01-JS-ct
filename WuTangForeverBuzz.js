class WuTangForeverBuzz {
    wuTangClan(value){
        let output ="";
for(let i = 1; i<= value; i++){
    // For numbers which are multiples of both 3 and 5, print "WuTangForever" instead of the number.
    if(i % 15 ===0){
        output += 'WuTangForever\n';
        console.log('WuTangForever\n');
        } // For each multiple of 5, print "Tang" instead of the number. 
       else if(i % 5 ===0){
            output += 'Tang\n';
            console.log('Tang\n');
            }// For each multiple of 3, print "Wu" instead of the number. 
       else if(i % 3 ===0){
        output += 'Wu\n';
        console.log('Wu\n');
        }
        else {
            output += i + '\n';
            console.log(i + '\n');
        }
        
}
        return output;
    }
}

module.exports = WuTangForeverBuzz;