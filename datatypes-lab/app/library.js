module.exports = {

dataTypes: function(data){
	if( Array.isArray(data)){
		if(data.length > 2){
            return data[2];
        }else{
            return undefined;
        }
	}
	if(typeof (data) === 'string'){
		return data.length;
	}
	if(typeof (data) === 'object' || typeof(data) === 'undefined'){
		return 'no value';
	}
	if(typeof (data) === 'boolean'){
		return data;
	}
	if(typeof (data) === 'number' && data < 100){
		return 'less than 100';
	}
	if(typeof (data) === 'number' && data === 100){
		return 'equal to 100';
	}
	if(typeof (data) === 'number' && data > 100){
		return 'more than 100';
	}
	if(typeof (data) === 'function'){
		return data(true);	
	}
	
}
}

