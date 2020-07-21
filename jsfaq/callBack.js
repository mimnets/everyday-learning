function explain_callback(name, age, task){
    console.log('Hello ',name);
    console.log('your age ',age);
    // console.log(task);
    task();
}

function washHand(){
    console.log('wash hand with soap');
}

function takeShower(){
    console.log('take shower');
}

function scrollFacebook(){
    console.log("Scroll facebook, but don't like post" );
}

function goToBed(){
    console.log('Go to bed for sleeping');
}

explain_callback('Sogir Uddin',18, washHand);
explain_callback('Jogir Uddin',12, takeShower);
explain_callback('Mugir Uddin',22, scrollFacebook);
explain_callback('Kabir Uddin',24, goToBed);

