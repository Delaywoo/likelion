let msg = 'Hello';

function sayHello(name){
	if(name){
		msg += ', ' + name;
	}
    console.log('함수 내부');
}
console.log('함수 호출 전');
sayHello('Mike');
console.log('함수 호출 후');