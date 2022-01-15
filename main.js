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
    }
}