function print() {
	const startingbid = document.getElementById("startingbid").value;
	const age = document.getElementsByName("age");
	const gossips = document.getElementsByClassName("gossips");
	const skills = document.getElementsByClassName("skills");

	const gname = document.getElementById("gname").value;
	const networth = document.getElementById("networth").value;
	const education = document.getElementById("education").value;
	const loveletter = document.getElementById("loveletter").value;

	const getRadioValue = (node_list, price) => {  
	    node_list.forEach(item => {
	        if (item.checked) {
	            price = price * Number(item.value)
	        }
	    })
	    return price;
	}

	const getCheckboxValuesForLoop = (html_collection, price) => { 
	    for (let i=0; i < html_collection.length; i++) {  
	        if (html_collection[i].checked) {
	            price = price + Number(html_collection[i].value)
	        }
	    }
	    return price;
	}	

	const getCheckboxValuesForLoop2 = (html_collection, price) => { 
	    for (let i=0; i < html_collection.length; i++) {  
	        if (html_collection[i].checked && i<2) {
	            price = price * Number(html_collection[i].value)
	        }
	        if (html_collection[i].checked && i==2) {
	            price = price + Number(html_collection[i].value)
	        }
	    }
	    return price;
	}

	const getCheckboxValuesReduce = (html_collection, price) => {
		let list = Array.from(html_collection)
	    let result = list.reduce((price, item) => {
	    	if (item.checked) {
	            return price + Number(item.value)
	        }
	    }, price)
	    return result;
	}

	function calculate() {
		let price = Number(startingbid);
		console.log(price);
    	price = price * Number(education);
		console.log(price);
    	price = price * Number(networth);
		console.log(price);
	    price = getCheckboxValuesForLoop(skills, price);
		console.log(price);
	    price = getRadioValue(age, price);
		console.log(price);
	    price = getCheckboxValuesForLoop2(gossips, price);
		console.log(price);
    	return price;
	}

	if (networth != "blank" && education != "blank" && gname != "") {
		document.getElementById("result").innerHTML = "The price for your bride " + gname + " is " + calculate() + ". Your love letter is "+ loveletter;
	}
}