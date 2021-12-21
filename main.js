Webcam.set({
    width:350,
    height:300,
    iamge_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
 Webcam.snap(function(data_uri)
 {
     document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
 });
}


console.log('ml5 version;',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/93dKaDVxL/model.json',modelloaded);

function modelloaded()
{
 console.log('modelloaded');
}

prediction_1="";
prediction_2="";

function speak()
{
 var synth=window.speechSynthesis;
 speak_data1="the first prediction is "+prediction_1;
 speak_data2="and the second prediction is "+prediction_2;
 var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
 synth.speak(utterthis);
}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotresult);
}
function gotresult(error,results)
{
    if (error)
    {
        console.error(error);
    }


    else {
        console.log (results);
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;

        speak();
     if (results[0].label=="Like")
     {
        document.getElementById("update_emoji1").innerHTML="&#128077";
     }
     if (results[0].label=="Unlike")
     {
         document.getElementById("update_emoji2s").innerHTML="&#128078";
     }
     if (results[0].label=="Super")
     {
         document.getElementById("update_emoji2s").innerHTML="&#128076";
     }



     if (results[1].label=="Like")
     {
        document.getElementById("update_emoji1").innerHTML="&#128077";
     }
     if (results[1].label=="Unlike")
     {
         document.getElementById("update_emoji2s").innerHTML="&#128078";
     }
     if (results[1].label=="Super")
     {
         document.getElementById("update_emoji2s").innerHTML="&#128076";
    }
    }
    }

