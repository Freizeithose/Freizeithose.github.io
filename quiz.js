var card;
var answer;
var cards;
  
	function getData() { 
        var output = $.ajax({
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function(data) {
                //Change data.source to data.something , where something is whichever part of the object you want returned.
                //To see the whole object you can output it to your browser console using:
                //console.log(data["Basic"][30]["img"]);
                //document.getElementById("output").innerHTML = data; 
                //document.getElementById('cardImg').src = data["Basic"][30]["img"]
                //card = data["Basic"][80]
                console.log(data);
                cards = data;
                //return data
            },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "IjNphtvZLlmshWPI4BEINzRjovSjp1rzBk0jsnjEcXcBkxjbuv"); // Enter here your Mashape key
            }
        });
    return output.success();
    }

    function getCard(data) {
    	var cardNr;
    	x =  Math.floor(Math.random() * (120 - 50 + 1) + 50);
        return data["Basic"][x];
    }
    
    function refreshCard() {
        //var data = document.getElementById("output").innerHTML;
        console.log(cards);
        var card = getCard(cards);
        randomCard = card;
        var context = document.getElementById('cardCanvas').getContext("2d");
        var image = document.getElementById('cardImg');
        image.src = card["img"];
        image.style.visibility = 'hidden';
        image.onload = function () {
            context.drawImage(image, 0, 0);
            context.fillRect(15,60,75,75);
        };
    }

    function check() {
        var x, text;
        x = document.getElementById("input").value;
        console.log(x);
        console.log(randomCard.cost);
        if ( x == randomCard.cost){
            text = "correct";
            refreshCard();
        } else {
            text = "wrong";
        }
        document.getElementById("test").innerHTML = text;
    }
    
    