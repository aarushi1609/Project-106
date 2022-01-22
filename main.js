function start()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classfier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PtOYw5xF0/model.json", modelReady)
}

function modelReady()
{
    classfier.classify(gotResults);
}

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
        
        dog_results = 0;
        cat_results = 0;

        if("results-sound" == "Dog Barking")
        {
            document.getElementById("image").src="funny-animals-dog.gif";
            dog_results = dog_results+1;
            document.getElementById("dog-results").innerHTML = dog_results;
        }
        if("results-sound" == "Cat Meowing")
        {
            document.getElementById("image").src="cute-kitty-best-kitty.gif";
            cat_results = cat_results+1;
            document.getElementById("cat-results").innerHTML = cat_results;
        }
        else
        {
            document.getElementById("image").src="ear-human-body-transparent_26367";
        }
    }
}