﻿var demo123CF_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.id123cf = '#id123-control';
    this.fieldOrigin = '';
    this.fieldDestination = '';

    this.setFieldOriginID = function ( fieldId ) {
        this.fieldOrigin = fieldId;
    }

    this.setFieldDestinationID = function ( fieldId ) {
        this.fieldDestination = fieldId;
    }


    this.init = function () {
        this.setOnChange();
    }

    this.validateData = function () {
        if(!$(this.id123cf+this.fieldOrigin).length)
            this.errorMessage = 'Invalid origin field';
        if(!$(this.id123cf+this.fieldDestination).length)
            this.errorMessage = 'Invalid destination field';

        return this.errorMessage == '';
    }

    this.updateDestinationValue = function (){
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        $(this.id123cf+this.fieldDestination).val($(this.id123cf+this.fieldOrigin).val());
    }

    this.setOnChange = function () {
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        //change event from start date to be copied to end date
        $(this.id123cf+this.fieldOrigin).change(function() {
            self.updateDestinationValue();
        });

    }
}

$( document ).ready(function() {

	$('#id123-control33890027').change(function() {
		switch(this.value)
		{
			case 'שרות MyBoxit':
			{
				$('#id123-control34330973').val($('#id123-control33890062').val());
				break;
			}
			case 'המשלוח שלי':
			{
				$('#id123-control34330973').val($('#id123-control33890109').val());
				break;
			}
			case 'מוצר שהתקבל':
			{
				$('#id123-control34330973').val($('#id123-control33890149').val());
				break;
			}
			case 'בקשת מידע':
			{
				$('#id123-control34330973').val($('#id123-control33890152').val());
				break;
			}			
		}					
    });

	
	
	$('#id123-control33890062').change(function() {
		if($('#id123-control33890027').val() == 'שרות MyBoxit')
		{
			$('#id123-control34330973').val($('#id123-control33890062').val());
		}
	});

	$('#id123-control33890109').change(function() {
		if($('#id123-control33890027').val() == 'המשלוח שלי')
		{
			$('#id123-control34330973').val($('#id123-control33890109').val());
		}
	});

	$('#id123-control33890149').change(function() {
		if($('#id123-control33890027').val() == 'מוצר שהתקבל')
		{
			$('#id123-control34330973').val($('#id123-control33890149').val());
		}
	});

	$('#id123-control33890152').change(function() {
		if($('#id123-control33890027').val() == 'בקשת מידע')
		{
			$('#id123-control34330973').val($('#id123-control33890152').val());
		}
	});				
});