class MainClass{
	
	constructor(){
	this.values = [{
	id:1,
	name:"Ramya"
	}, {
	id:2,
	name:"Ramya"
	} , {
	id:3,
	name:"Jinal"
	}, {
	id:4,
	name:"Jani"
	}, {
	id:5,
	name:"Maya Sarabhai"
	}]
	}


/*
###############################################################
 Name : map
 Author : Ramya Iyer<ramyaiyer96@gmail.com>
 Purpose : for the for loop
 Date : 23rd March 2020
 ############################################################### */
map(property){
	this.values =  this.values.map(single=>{
		if(single.id === property.id){
			single.name = property.name
		}
		return single
	})
	return this
}

/*
###############################################################
 Name : push
 Author : Ramya Iyer<ramyaiyer96@gmail.com>
 Purpose : push records into an array.
 Date : 23rd March 2020
 ############################################################### */
push(){
	var arrayname ={
		id:6,name:"lukini"
	}
this.values =this.values.push(arrayname);

return this;
}

/*
###############################################################
 Name : filter
 Author : Ramya Iyer<ramyaiyer96@gmail.com>
 Purpose : filter user based on gender, age and name
 Date : 23rd March 2020
 ############################################################### */
/****************************************************Optimized code with Object.keys**************************************/

filter(properties, remove = false) {
		let key = null;
		let value = null;
		Object.keys(properties).forEach(val => {
			key = val;
			value = properties[val];
		});
		this.values = this.values.filter(single => {
			return remove ? single[key] != value : single[key] == value;
		});

		return this;
	}

/*filter(properties){
	
	 this.values = this.values.filter(single=>{
	 	if(properties.find != undefined){
	 	return single.name === properties.name
	 	}
	 	if(properties.remove != undefined){
	 		return single.name != properties.name;
	 	}else {
	 		if(properties.id != undefined){
	 		return single.id === properties.id;	
	 	}else{
	 		return single.name === properties.name;
	 	}
	 }
	 		
	})
return this;
}*/


}

let SignupClass = new MainClass()

//console.log(SignupClass.values);

/*push function */
//var name= SignupClass.push();

/*sort function*/
/*var sort = SignupClass.values.sort();
console.log(sort);*/

SignupClass.filter({ name: 'Jinal' }, true);

console.log(SignupClass.values);