// throw - we must catch it with try&catch

// isNaN() - is not a number:will return boolean value
const calcRectangle = (height, width) => {
    if(isNaN(height) || isNaN(width))
        throw "height / width is not a number.. Please try again!";
    return height * width;
}

console.log("Start program");
try{
    console.log(calcRectangle(2, "xxx"));
} catch(e){
    console.log(e);
}

console.log("End program");