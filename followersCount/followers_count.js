let followerCount = 0;
function addFollower(){
  followerCount++;
  displayCount();
  congrateOwner();
}
 function congrateOwner(){
    if(followerCount == 10){
        alert("congradulation you have reched 10 followers!!")
    }else if (followerCount == 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
      }
 }
 function displayCount(){
    document.getElementById("followers").innerHTML = followerCount;
 }
 function resset(){
    followerCount = 0;
    displayCount();
 }