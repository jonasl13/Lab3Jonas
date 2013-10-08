console.log("test");
$(function() {
		// Definerer variabelen canvas med referanse til objekt (må finnes i DOM-treet, dvs. i HTML filen) med id my_canvas
		var canvas = $('#my_canvas');
        

		// Beregner (x,y) posisjon til canvas DOM-element på siden
		var canvasPosition = {
			x: canvas.offset().left,
			y: canvas.offset().top
		};
		
		// Her "fanges" click hendelse opp med jQuery metoden
		// e refererer til hendelse (event) som da gir mulighet til å kalle tilgjengelige metoder
		canvas.on('click', function(e) {

		// Setter inn denne metode for å unngå standardrespons på standardhendelser til mus
			//e.preventDefault();
		
		// Bruker pageX og pageY for å få posisjonen til mus i forhold til hele siden (ikke my_canvas)
			var mouse = {
				x: e.pageX - canvasPosition.x,
				y: e.pageY - canvasPosition.y
			}
		
		/*
		   Nå har du lokale koordinater mouse.x og mouse.y
		   som er beregnet i forhold til det lokale 
		   koordinatsystemet i my_canvas 
		   med (0,0) i den øverste venstre hjørne
		*/
		   //Skriv koordinatene ut til console basert på lab3_v1
			console.log(mouse.x + "," + mouse.y);
            $("#x").html(mouse.x);
            $("#y").html(mouse.y);
            
            canvas.drawArc({
                fillStroke: "#333",
                x: mouse.x,
                y: mouse.y,
                radius:2
            }); 
        });
	}); 