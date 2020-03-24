describe('How many items have quantity over 20' , function(){
	it('Item list 1' , function(){
	var item = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
	assert.deepEqual(findItemsOver20(item), [{'name' : 'pears', 'qty' : 37}, {'name' : 'bananas', 'qty' : 27}]);        
	});

	it('Item list 2' , function(){
	var item = [
    {name : 'apples', qty : 35},
    {name : 'pears', qty : 15},
    {name : 'bananas', qty : 10},
    {name : 'kiwi', qty : 21},
];
	assert.deepEqual(findItemsOver20(item), [{'name' : 'apples', 'qty' : 35}, {'name' : 'kiwi', 'qty' : 21}]);        
	});
  });