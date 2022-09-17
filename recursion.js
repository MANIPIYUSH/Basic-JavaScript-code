
let counter =1;

function demo(number){


    if(counter > number)
    {
        return;
    }


    console.log("Hey world! I am a Warrior");
    counter++;
    demo(number);

}

demo(10);