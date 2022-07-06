function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JHj0adXqb/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;   
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence * 100).toFixed(2)+" %";    
        document.getElementById("result_label").style.color = "rgb("+random_number_r+ "," +random_number_g+","+random_number_b+ ")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+ "," +random_number_g+","+random_number_b+ ")";

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('mouse');

        if (result[0].label == "Cat") {
            img.src = 'cat-gif.gif';
            img1.src = 'dog.jpeg';
            img2.src = 'lion.jpeg';
            img3.src = 'mouse.jpeg';
        } else if(result[0].label == "Dog") {
          img.src = 'cat.jpeg';
          img1.src = 'dog-gif.gif';
          img2.src = 'lion.jpeg';
          img3.src = 'mouse.jpeg';
    } else if(result[0].label == "Lion") {
      img.src = 'cat.jpeg';
      img1.src = 'dog.jpeg';
      img2.src = 'lion-gif.gif';
      img3.src = 'mouse.jpeg';
    } else{
      img.src = 'cat.jpeg';
      img1.src = 'dog.jpeg';
      img2.src = 'lion.jpeg';
      img3.src = 'mouse-gif.gif';
    }

}

}