module.exports = function (blockly) {
	let Blockly = blockly.Blockly;

	Blockly.Python.import_requests = function () {
		if (!Blockly.Python.definitions_['requests']) {
			Blockly.Python.definitions_['requests'] = 'import requests';
		}
	};

	Blockly.Python['http_get'] = function (block) {
		var value_method = block.getFieldValue('method');
		var value_link = Blockly.Python.valueToCode(block, 'link', Blockly.Python.ORDER_ATOMIC);
		Blockly.Python.import_requests();
		// // TODO: Assemble Python into code variable.
		var code;
		// TODO: Change ORDER_NONE to the correct strength.
		code = 'requests.' + value_method + '(' + value_link + ')';
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['http_post'] = function (block) {
		var value_method = block.getFieldValue('method');
		var value_link = Blockly.Python.valueToCode(block, 'link', Blockly.Python.ORDER_ATOMIC);
		var format = block.getFieldValue('format');
		var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
		Blockly.Python.import_requests();
		// // TODO: Assemble Python into code variable.
		var code;
		// TODO: Change ORDER_NONE to the correct strength.
		code = 'requests.' + value_method + '(' + value_link + ', ' + format + ' = ' + value_data + ')';
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['http_format'] = function (block) {
		var value_format = block.getFieldValue('format');
		var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
		Blockly.Python.import_requests();
		// // TODO: Assemble Python into code variable.
		var code;
		// TODO: Change ORDER_NONE to the correct strength.
		code = value_data + '.' + value_format;
		return [code, Blockly.Python.ORDER_NONE];
	};
};
