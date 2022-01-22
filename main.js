function start()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classfier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PtOYw5xF0/model.json", modelReady)
}

function modelReady()
{
    classfier.classify(gotResults);
}

dog_results = 0;
cat_results = 0;

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        label = results[0].label;
        document.getElementById("results-sound").innerHTML = label;
        accuracy = Math.floor(results[0].confidence*100);
        document.getElementById("results-accuracy").innerHTML = accuracy + "%";
        

        if(label == "Dog Barking")
        {
            document.getElementById("image").src="funny-animals-dog.gif";
            dog_results = dog_results+1;
            document.getElementById("dog-results").innerHTML = dog_results;
        }
        if(label == "Cat Meowing")
        {
            document.getElementById("image").src="cute-kitty-best-kitty.gif";
            cat_results = cat_results+1;
            document.getElementById("cat-results").innerHTML = cat_results;
        }
        else
        {
            document.getElementById("image").src="PngItem_1228102.png";
        }
    }
}