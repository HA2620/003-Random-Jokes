const jokeArray = ["I invented a new word Plagiarism!", "Hear about the new restaurant called Karma? There's no menu: You get what you deserve.", "Why don't scientists trust atoms? Because they make up everything.", "How does Moses make tea? He brews.", "I can't count how many times I failed maths at school.","'Automatic' simply means that you cannot repair it yourself.","A bird in hand is safer than one overhead." , "A fool and his money are some party." ,"A friend in power is a friend lost.","A good listener not only is popular everywhere but also, after a while, knows something.","A great deal of money is never enough once you have it.","A narrow mind has a broad tongue.","A perfectly calm day will turn gusty the instant you drop a $20 bill.","you","A short cut is the longest distance between two points.","A waist is a terrible thing to mind.","All great discoveries are made by mistake.","All warranties expire upon payment of invoice.","All's well that ends.","Always forgive your enemies - nothing else annoys them as much.","An elephant is a mouse built to government specifications."]

function jokeLoad() {
    var randomNum = Math.floor(Math.random() * 21);

    document.querySelector(".joke-cont p").innerHTML = jokeArray[randomNum];
    // console.log(jokeArray[randomNum]);
}
