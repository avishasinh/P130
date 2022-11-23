function preload(){
    image = loadImage("waterBottle.png")
}

function setup(){
    classifier = ml5.imageClassifier("MobileNet", modalLoaded)
    classifier.classify(image, gotResults)
}

function draw(){

}

function modalLoaded(){
    console.log("Modal Loaded")
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)

        document.getElementById("mobileNet").innerHTML = results[0].label
    }
}