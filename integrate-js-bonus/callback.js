function welComeGuest(name,greetHandler){
    // console.log(name);
    greetHandler(name);
}

const actorName = 'Tom Hanks';

function greetMorning(name){
    console.log('Good morning', name);
}

welComeGuest(actorName, greetMorning);

//This is a named fucntion
function handleClick(){
    console.log('Someone clciked me');
}

//Anonymous function
function(){
    console.log('No one clicked me')
}