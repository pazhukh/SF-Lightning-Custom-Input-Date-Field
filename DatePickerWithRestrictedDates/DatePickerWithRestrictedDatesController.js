({
	configureDatepicker : function(component, event, helper) {
        var availableDates = ['2019-06-21', '2019-06-27', '2019-06-28'];

        $(document).ready(function(){       
            $('#datepicker').datepicker({
                beforeShowDay: function(date){
                    var dateStr = jQuery.datepicker.formatDate('yy-mm-dd', date);
        			return [ availableDates.indexOf(dateStr) == -1 ];
                },
                minDate : 0,
                dayNamesMin : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                altField : '#formatedDate',
                altFormat :'yy-mm-dd',
                dateFormat : 'M dd, yy',
                showButtonPanel : true,
                showOtherMonths : true,
                selectOtherMonths : false,
                changeYear : true
            });      
        });

        $('#datepicker').change(() => {
            if ($('#datepicker').val() == '') {
            	$('#formatedDate').val('');
        	}
        })
	}, 
    
    getDate : function(component, event, helper) {
        alert(document.getElementById('formatedDate').value);
    }

})