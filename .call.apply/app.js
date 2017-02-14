var obj = {
	name: 'John Doe',
	greet: function(param) {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
obj.greet.call({ name: 'Jane Doe' });
obj.greet.apply({ name: 'Jane Doe' });

//obj.greet.call({ name: 'Jane Doe' }, param, param);
//obj.greet.apply({ name: 'Jane Doe' }, [param, param]);