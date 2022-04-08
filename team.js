let firstMember = document.querySelector("#activePic");
let memberName = document.querySelector("#memberName");
let memberBio = document.querySelector("#memberBio");

let picNum = 1;

console.log(firstMember);
console.log(memberName);
console.log(memberBio);

document.querySelector('#next').addEventListener('click', (function(){
    if(picNum < 4){
        picNum += 1;
        firstMember.src = 'pics/liige1' + picNum + '.png';
    }
    else{
        firstMember.src = 'pics/liige1' + picNum + '.png';
        picNum = 1;
    }
    if(picNum == 1){
        firstMember.src = 'pics/liige1' + picNum + '.png';
    }
    console.log(picNum);

    if(picNum==1){
        memberName.innerHTML = '<p id="memberName">May Denless</p>'
    }
    if(picNum==2){
        memberName.innerHTML = '<p id="memberName">Mike Oxlong</p>'
    }
    if(picNum==3){
        memberName.innerHTML = '<p id="memberName">Ben Dover</p>'
    }
    if(picNum==4){
        memberName.innerHTML = '<p id="memberName">John Doe</p>'
    }
}))

document.querySelector('#previous').addEventListener('click', (function(){
    if(picNum > 1){
        picNum -= 1;
        firstMember.src = 'pics/liige1' + picNum + '.png';
    } else {
        picNum = 4;
        firstMember.src = 'pics/liige1' + picNum + '.png';
    }
    console.log(picNum);

    if(picNum==1){
        memberName.innerHTML = '<p id="memberName">May Denless</p>'
    }
    if(picNum==2){
        memberName.innerHTML = '<p id="memberName">Mike Oxlong</p>'
    }
    if(picNum==3){
        memberName.innerHTML = '<p id="memberName">Ben Dover</p>'
    }
    if(picNum==4){
        memberName.innerHTML = '<p id="memberName">John Doe</p>'
    }
}))
