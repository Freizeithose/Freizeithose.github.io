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
    	x =  Math.floor(Math.random() * (80 - 10 + 1) + 10);
        return data["Basic"][x];
    }
    
    function refreshCard() {
        //var data = document.getElementById("output").innerHTML;
        console.log(cards);
        var card = getCard(cards);
        var image = document.getElementById('cardImg');
        image.src = card["img"];
    }

    function changeImage() {
        var image = document.getElementById('cardImg');
        image.src = card["img"];
    }
    
    function check() {
        var x, text;
        x = document.getElementById("input").value;
        if ( x == card.cost){
            text = "correct";
        } else {
            text = "wrong";
        }
        document.getElementById("demo").innerHTML = text;
    }
