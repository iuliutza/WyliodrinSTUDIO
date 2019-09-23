// DO NOT EDIT THIS FILE, IT IS AUTMATICALLY GENERATED

module.exports = function (blockly) {
	var Blockly = blockly.Blockly;
	// var goog = blockly.goog;
	// Screen and Keyboard

	Blockly.Blocks['opcuamodel_property'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('OPC/UA Property');
			this.appendDummyInput()
				.appendField('Name')
				.appendField(new Blockly.FieldTextInput('property_name'), 'property_name');
			this.appendDummyInput()
				.appendField('Data Type')
				.appendField(new Blockly.FieldDropdown([['Boolean', 'Boolean'], ['Byte', 'Byte'], ['ByteString', 'ByteString'], ['DateTime', 'DateTime'], ['Double', 'Double'], ['Float', 'Float'], ['GUID', 'GUID'], ['Int16', 'Int16'], ['Int32', 'Int32'], ['Int64', 'Int64'], ['option', 'OPTIONNAME']]), 'property_datatype');
			this.setPreviousStatement(true, ['opcuamodel_object', 'opcuamodel_folder', 'opcuamodel_property']);
			this.setNextStatement(true, ['opcuamodel_object', 'opcuamodel_folder', 'opcuamodel_property']);
			this.setColour(230);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['opcuamodel_object'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('OPC/UA Object');
			this.appendDummyInput()
				.appendField('Name')
				.appendField(new Blockly.FieldTextInput('object_name'), 'object_name');
			this.appendDummyInput()
				.appendField('ID')
				.appendField(new Blockly.FieldTextInput('object_id'), 'object_id');
			this.appendDummyInput()
				.appendField('Data Type')
				.appendField(new Blockly.FieldDropdown([['Int', 'Integer'], ['option', 'OPTIONNAME'], ['option', 'OPTIONNAME']]), 'object_type');
			this.appendDummyInput()
				.appendField('History')
				.appendField(new Blockly.FieldCheckbox('FALSE'), 'object_history');
			this.appendDummyInput()
				.appendField('Properties');
			this.appendStatementInput('NAME')
				.setCheck(null);
			this.setInputsInline(false);
			this.setPreviousStatement(true, ['opcuamodel_property', 'opcuamodel_object', 'opcuamodel_folder']);
			this.setNextStatement(true, ['opcuamodel_property', 'opcuamodel_object', 'opcuamodel_folder']);
			this.setColour(230);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['opcuamodel_folder'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('OPC/UA Folder')
				.appendField(new Blockly.FieldTextInput('folder_name'), 'folder_name');
			this.appendStatementInput('NAME')
				.setCheck(['opcuamodel_property', 'opcuamodel_object', 'opcuamodel_folder']);
			this.setPreviousStatement(true, ['opcuamodel_object', 'opcuamodel_folder']);
			this.setNextStatement(true, ['opcuamodel_object', 'opcuamodel_folder']);
			this.setColour(230);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

};
