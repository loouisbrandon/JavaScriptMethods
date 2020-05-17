class MainClass{


	constructor(){
		this.values = [{
			name:"Ramya",
			age: 24,
			gender: 'Female',
			password:12345678
			}, {
			name:"Ramya",
			age: 12,
			gender: 'Female',
			password:1231678
			} , {
			name:"Jinal",
			age: 12,
			gender: 'Female',
			password:1231678
			}, {
			name:"Jani",
			age: 21,
			gender:'Male',
			password:'232323'
			}]
		}
	

/*
###############################################################
 Name : push
 Author : Ramya Iyer<ramyaiyer96@gmail.com>
 Purpose : push records into an array.
 Date : 25th March 2020
 ############################################################### */
 push(arrayName){
 	console.log(arrayName);
	this.values =this.values.push(arrayName);

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

find(properties, remove = false) {
		let key = null;
		let value = null;
		Object.keys(properties).forEach(val => {
			key = val;
			value = properties[val];
		});
		this.values = this.values.find(single => {
			if(remove){
				return single[key] != value
			}else{
				return single[key] == value;
			}
			
		});

		return this;
	}

	sort(property){
		let key = null;
		let value =null;
		Object.keys(property).forEach(val => {
			key = val;
			value = property[val];
		});
		this.values = this.values.sort(key);

	}

}



let SignupClass = new MainClass()
var myArray ={}

var myArray = {
	name:'Shivani',
	age: 21,
	gender:'Female',
	password: 12345678
}
//console.log(SignupClass.values);
/* push function called */
/*var userDetailfunc = SignupClass.push(myArray);
console.log(userDetailfunc);*/
//SignupClass.find({ name: 'Ramya' }, false);
SignupClass.sort({sort:'name'});

console.log(SignupClass.values);
