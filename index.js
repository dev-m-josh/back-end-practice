//CallBacks
/*{
let a = "good";
let b = "day";
let c = "Hello";



function myFunction1(callback){
    setTimeout(() => {
        console.log()
        callback()
    }, );
}

function myFunction2() {
        console.log(a)
        console.log(b)
}

function myFunction3(backcall){
    setTimeout(() => {
        console.log("i will")
        console.log("be back soon")
        backcall()
    }, );
}

function myFunction4(){
    setTimeout(() => {
        console.log("hello world")
    }, );
 
}

function myFunction5(){
    console.log()
}

myFunction4()
myFunction1(myFunction2)
myFunction3(myFunction5)
}*/


//Promises
/*Take out the trash and 
clean the kitchen then
Take the dog for a walk.*/

//Take out trash

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        const trashOut = true;
        if (trashOut) {
            resolve("Good job trash taken out")
        }else{
            reject("You are fired!")
        }
    })
}

//Clean the kitchen
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        const kitchenClean = true
        if (kitchenClean) {
            resolve("Nice job kitchen well cleaned.")
        }else{
            reject("You did nothing in the kitchen!")
        }
    })
}

//Take the dog for a walk
function walkTheDog() {
    return new Promise((resolve, reject) => {
        const dogWalk= true;
        if (dogWalk) {
            resolve("You took the dog for a walk!")
        }else{
            reject("You didn't take the dog for a walk!")
        }
    })
    
}



//1
async function doChores() {
    try {
        const takeTrashOut = await takeOutTrash();
        console.log(takeTrashOut);
            const kitchen = await cleanKitchen();
            console.log(kitchen);
                const walkDog = await walkTheDog();
                console.log(walkDog);
                console.log("Nice job done 👍")
    } catch (error) {
        console.log(error);
    }

}
doChores()




