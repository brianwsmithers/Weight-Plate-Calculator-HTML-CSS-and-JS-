// Script for calculating the number of plates for each side of the bar.
function calculateWeights() {
	// Get the value of id="weight", remove weight of the bar and divide by two.
	// 145 lbs input should return one 45 lbs plate and one 5 lbs plate for the output.
	var x = document.getElementById("weight").value;
	
	if (x > 45) {
		x = x - 45.0;
		x = x / 2;
	if (x % 2 == 0 || x % 2.5 == 0) {
		var fourtyFivePoundsCounter = 0;
		var twentyFivePoundsCounter = 0;
		var tenPoundsCounter = 0;
		var fivePoundsCounter = 0;
		var twoAndOneHalfPoundsCounter = 0;
		
		while (x != 0) {
			if (x >= 45) {
				fourtyFivePoundsCounter++;
				x = x - 45;
			}
			else if (x >= 25) {
				twentyFivePoundsCounter++;
				x = x - 25;
			}
			else if (x >= 10) {
				tenPoundsCounter++;
				x = x - 10;
			}
			else if (x >= 5) {
				fivePoundsCounter++;
				x = x - 5;
			}
			else if (x >= 2.5) {
				twoAndOneHalfPoundsCounter++;
				x = x - 2.5;
			}
		}
		
		// Put the correct output in the associated textfield...
		document.getElementById("fourtyFivePounds").value = fourtyFivePoundsCounter;
		document.getElementById("twentyFivePounds").value = twentyFivePoundsCounter;
		document.getElementById("tenPounds").value = tenPoundsCounter;
		document.getElementById("fivePounds").value = fivePoundsCounter;
		document.getElementById("twoAndOneHalfPounds").value = twoAndOneHalfPoundsCounter;
		}
	}
}