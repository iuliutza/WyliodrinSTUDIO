// DO NOT EDIT THIS FILE, IT IS AUTMATICALLY GENERATED

module.exports = function (blockly) {
	var Blockly = blockly.Blockly;
	// var goog = blockly.goog;
	// Screen and Keyboard

	Blockly.JavaScript['print'] = function (block) {
		var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = 'console.log (' + value_value + ');\n';
		// TODO: Change ORDER_NONE to the correct strength.
		return code;
	};

	Blockly.JavaScript['read'] = function (/*block*/) {
		// TODO: Assemble JavaScript into code variable.
		// TODO: Change ORDER_NONE to the correct strength.
		return '//Block not supported in JavaScript.\n';
	};

	Blockly.JavaScript['readwrite'] = function (/*block*/) {
		// // TODO: Change ORDER_NONE to the correct strength.
		return '//Block not supported in JavaScript.\n';
	};

	Blockly.JavaScript['println'] = function (block) {
		var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = 'console.log(' + value_value + ');\n';
		return code;
	};

	Blockly.JavaScript['delay'] = function (/*block*/) {
		// // TODO: Change ORDER_NONE to the correct strength.
		return '//Block not supported in JavaScript.\n';
	};

	Blockly.JavaScript['json_key'] = function (block) {
		var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
		var value_json = Blockly.JavaScript.valueToCode(block, 'JSON', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = value_json + '[' + value_key + ']';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['json_index'] = function (block) {
		var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
		var value_json = Blockly.JavaScript.valueToCode(block, 'JSON', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = value_json + '[' + value_index + ']';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['json_items'] = function (block) {
		var value_json = Blockly.Python.valueToCode(block, 'JSON', Blockly.Python.ORDER_ATOMIC);
		// TODO: Assemble Python into code variable.
		var code = value_json + '.length';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.JavaScript['truncate'] = function (block) {
		var value_truncate = Blockly.JavaScript.valueToCode(block, 'truncate', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = 'Math.round(' + value_truncate + ')';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['map_block'] = function (block) {
		var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
		var value_from_low = Blockly.JavaScript.valueToCode(block, 'from_low', Blockly.JavaScript.ORDER_ATOMIC);
		var value_to_low = Blockly.JavaScript.valueToCode(block, 'to_low', Blockly.JavaScript.ORDER_ATOMIC);
		var value_from_high = Blockly.JavaScript.valueToCode(block, 'from_high', Blockly.JavaScript.ORDER_ATOMIC);
		var value_to_high = Blockly.JavaScript.valueToCode(block, 'to_high', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = value_to_low + '+ (' + value_value + '*(' + value_to_high + '-' + value_to_low + '))/(' + value_from_high + '-' + value_from_low + ')';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['kelvintocelsius'] = function (block) {
		var value_degrees = Blockly.JavaScript.valueToCode(block, 'degrees', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = value_degrees + '-273.15';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['fahrenheittocelsius'] = function (block) {
		var value_degrees = Blockly.JavaScript.valueToCode(block, 'degrees', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = '(' + value_degrees + '-32)/1.8';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['celsiustokelvin'] = function (block) {
		var value_degrees = Blockly.JavaScript.valueToCode(block, 'degrees', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = value_degrees + '+273.15';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['celsiustofahrenheit'] = function (block) {
		var value_degrees = Blockly.JavaScript.valueToCode(block, 'degrees', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = '(' + value_degrees + '*1.8)+32';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['dict_get'] = function (block) {
		var dict = Blockly.JavaScript.valueToCode(block, 'DICT',
			Blockly.JavaScript.ORDER_MEMBER) || 'undefined';
		var value = Blockly.JavaScript.valueToCode(block, 'ITEM',
			Blockly.JavaScript.ORDER_NONE) || 'undefined';
		var code = dict + '[' + value + ']';
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['dict_get_literal'] = function (block) {
		var dict = Blockly.JavaScript.valueToCode(block, 'DICT',
			Blockly.JavaScript.ORDER_MEMBER) || 'undefined';
		var value = Blockly.JavaScript.quote_(block.getFieldValue('ITEM'));
		var code = dict + '[' + value + ']';
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};


	Blockly.JavaScript['dicts_create_with'] = function (block) {
		// TODO: Assemble JavaScript into code variable.
		var code = new Array(block.itemCount_);

		for (var n = 0; n < block.itemCount_; n++) {
			var key = Blockly.JavaScript.quote_(block.getFieldValue('KEY' + n));
			var value = Blockly.JavaScript.valueToCode(block, 'VALUE' + n,
				Blockly.JavaScript.ORDER_NONE) || 'undefined';
			code[n] = key + ': ' + value;
		}
		code = '{' + code.join(', ') + '}';
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['dict_keys'] = function (block) {
		var dict = Blockly.JavaScript.valueToCode(block, 'DICT',
			Blockly.JavaScript.ORDER_MEMBER) || 'undefined';
		var code = 'Object.keys(' + dict + ')';
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['to_json'] = function (block) {
		var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = 'JSON.stringify(' + value_value + ')';
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

};