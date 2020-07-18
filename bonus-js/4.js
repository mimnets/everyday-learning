// function tinyFriend(friends){
//     var tFriend = friends[0];
//     for (var i = 0; i < friends.length; i++){
//       var sFriend = friends[i].length;
//       if(sFriend > tFriend){
//         tFriend = sFriend;
//       }
//       else if(sFriend < tFriend){
//           tFriend = sFriend;
//       }
//     }return tFriend;
//   }
  
//   var myTinyFriend = tinyFriend(["moiuyuiyrl","islam","Monirrr"]);
  
//   console.log(myTinyFriend);

var array = ["Monirul", "Islamsss", "Monir","Piew","gi","a"];

var count = array[0].length;
for(var i = 0; i < array.length; i++){
    var min = array[i].length;
    if(min < count){
        count = min;
    }
}


console.log(count);