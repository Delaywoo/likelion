function sayHello(name){
	let msg = `Hello`;
	if(name){
		msg = `Hello, ${name}`;
	}
	console.log(msg);
}

sayHello();

// 'Hello'가 출력된다.
// 9줄에서 함수 실행시 괄호 안에 name이라는 변수를 아무것도 입력해주지 않아서 if문 안이 실행되지 않는다.