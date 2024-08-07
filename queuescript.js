//variable Declaration
const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const massage = document.querySelector(".massage");
const massageBox = document.querySelector(".massage-box");
const box = document.querySelectorAll(".box");
const stack = [];
var r=-1;
var f=-1;
var s;

//for disable all buttons
const buttonDisable = () => {
	push.disabled = true;
	push.classList.add("disable-button");
	pop.disabled = true;
	pop.classList.add("disable-button");
	reset.disabled = true;
	reset.classList.add("disable-button");
	input.disabled = true;
};

//for enable all buttons
const buttonEnable = () => {
	push.disabled = false;
	push.classList.remove("disable-button");
	pop.disabled = false;
	pop.classList.remove("disable-button");
	reset.disabled = false;
	reset.classList.remove("disable-button");
	input.disabled = false;
};

//When the push button will be clicked
push.addEventListener("click", () => {
	//if input box is empty
	if (input.value == "") {
		massage.innerHTML = "Please Enter a value.";
		massageBox.classList.add("error-massage");
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1000);
		return;
	}
	if(f==r & r==-1){
		while (stack.length > 0) {
			stack.pop();
		}

	}

	//if the Queue is full
	if (stack.length == 5) {
		input.value = "";
		massage.innerHTML = "Queue Overflow";
		massageBox.classList.add("error-massage");
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1000);
		return;
	}
	const itemValue = input.value; //for store the input value
	insert(itemValue) //push the value into the stack

	//creating a new element
	const element = document.createElement("div");
	element.classList.add("ele");
	element.innerText = stack[stack.length - 1];
	bucket.appendChild(element);

	//update the front
	box[0].innerHTML = stack[0];

	//clear the input box
	input.value = "";

	//adding the animation for a new pushed element
	element.classList.add("ele-add");

	//disable all buttons
	buttonDisable();

	//after pushing the element
	setTimeout(() => {
		//remove the animation
		element.classList.remove("ele-add");

		//update the rear end and inserted Item Value
		box[1].innerHTML = itemValue;
		box[2].innerHTML= itemValue;

		//Display the massage
		massage.innerHTML = `Item ${stack[stack.length - 1]} is Inserted.`;

		//Enable all buttons
		buttonEnable();
	}, 1000);
});

//When the delete button will be clicked
pop.addEventListener("click", () => {
	//if Stack is Empty
	if (stack.length == 0) {
		massageBox.classList.add("error-massage");
		massage.innerHTML = "Queue Underflow";
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1200);
		return;
	}
	
	//adding the popping animation
	bucket.firstElementChild.classList.add("ele-remove");

	//disable all buttons
	buttonDisable();

	//start popping the element
	setTimeout(() => {
		//Storing the popped value
		const itemValue =Delete();
		//delete the element from the bucket
		bucket.removeChild(bucket.firstElementChild);

		
		//updating the front
		
		//updating the last popped item
		if (f==-1){
			box[0].innerHTML="";
			box[1].innerHTML="";
			box[2].innerHTML="";
		}
		else{
			if(f==r)
			{box[0].innerHTML=itemValue}
		box[0].innerHTML =stack[f]; 
		}
		buttonEnable();
		if (stack.length == 0) {
			box[0].innerHTML = "";
		} else {
			
			box[3].innerHTML = itemValue;
		}

		//adding the massage
		massage.innerHTML = `Item ${itemValue} is Deleted.`;
	
		//Enable all buttons
		buttonEnable();
	}, 1500);
});


//When the reset button will be clicked
reset.addEventListener("click", () => {
	//clear the full array
	while (stack.length > 0) {
		stack.pop();
	}

	//clear all fields
	box[0].innerHTML = "";
	box[1].innerHTML = "";
	box[2].innerHTML = "";
	box[3].innerHTML="";
	massage.innerHTML = "";

	//clear all elements from the bucket
	while (bucket.firstChild) {
		bucket.removeChild(bucket.firstChild);
	}
	r=-1;
	f=-1;

	setTimeout(() => {
        massage.innerHTML = " Queue reset";


    }, 500);
	
});



function insert(v){
	
	if (r==4)
		if(f==-1){r=0;}
	
	r+=1;
	stack[r]=v;
	if(r==0)
	{f+=1;}


}

function Delete(){
	

	if(f==r){
		
		s=stack[f];
		f=0;
		r=0;
		
		return s;
	}
	
	
	s=stack[f];
	if(f==0){
		massageBox.classList.add("error-massage");	
		massage.innerHTML = "Queue Underflow,can't delete";
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1200);
		return;
		}
	
	f+=1;
	if (f==5){
		massageBox.classList.add("error-massage");
		massage.innerHTML = "Queue Underflow";
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1200);
		return;
	}
	
	return s;
	

}