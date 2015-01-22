
$(function () {
var t  = $('#t');
var CODE = [];
var CODE2 = []
var CODE3 = []
var CODE4 = []
var CODE5 = []

var nerkrum = []
for (var i in LightPosition) {
	var xy = LightPosition[i];
	var  div = $('<div/>') ;
	div.addClass('absClass')
	div.css({'left':xy[0],'top':xy[1]});
	div.text(i);
	t.append(div);
	nerkrum.push(div);
	div.mouseover(function(e){
	if (e.which === 1 && code1.checked == true) {
	// CODE 1 mouseover
		var num = $(this).text();
		if ($('.absClass.selected') && CODE.indexOf(num) > -1)
		{
			$(this).toggleClass('selected');
			CODE.splice(CODE.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected');
			CODE.push(num);
		}
	}
	
	else if (code2.checked == true && e.which === 1)
	{
	//CODE2 mouseover
		var num = $(this).text();
		if ($('.absClass.selected2') && CODE2.indexOf(num) > -1)
		{
			$(this).toggleClass('selected2');
			CODE2.splice(CODE2.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected2');
			CODE2.push(num);
		}
	}
	else if (code3.checked == true && e.which === 1)
	{
	//CODE3 mouseover
		var num = $(this).text();
		if ($('.absClass.selected3') && CODE3.indexOf(num) > -1)
		{
			$(this).toggleClass('selected3');
			CODE3.splice(CODE3.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected3');
			CODE3.push(num);
		}
	}
	
	else if (code4.checked == true && e.which === 1)
	{
	//CODE4 mouseover
		var num = $(this).text();
		if ($('.absClass.selected4') && CODE4.indexOf(num) > -1)
		{
			$(this).toggleClass('selected4');
			CODE4.splice(CODE4.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected4');
			CODE4.push(num);
		}
	}
	else if (code5.checked == true && e.which === 1)
	{
	//CODE5 mouseover
		var num = $(this).text();
		if ($('.absClass.selected5') && CODE5.indexOf(num) > -1)
		{
			$(this).toggleClass('selected5');
			CODE5.splice(CODE5.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected5');
			CODE5.push(num);
		}
	}
	
	}).click(function(){
	if (code1.checked == true) {
	// CODE 1 click
		var num = $(this).text();
		if ($('.absClass.selected') && CODE.indexOf(num) > -1)
		{
			$(this).toggleClass('selected');
			CODE.splice(CODE.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected');
			CODE.push(num);
		}
	}
	
	else if (code2.checked == true)
	{
	//CODE2 click
		var num = $(this).text();
		if ($('.absClass.selected2') && CODE2.indexOf(num) > -1)
		{
			$(this).toggleClass('selected2');
			CODE2.splice(CODE2.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected2');
			CODE2.push(num);
		}
	}
	else if (code3.checked == true)
	{
	//CODE3 click
		var num = $(this).text();
		if ($('.absClass.selected3') && CODE3.indexOf(num) > -1)
		{
			$(this).toggleClass('selected3');
			CODE3.splice(CODE3.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected3');
			CODE3.push(num);
		}
	}
	
	else if (code4.checked == true)
	{
	//CODE4 click
		var num = $(this).text();
		if ($('.absClass.selected4') && CODE4.indexOf(num) > -1)
		{
			$(this).toggleClass('selected4');
			CODE4.splice(CODE4.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected4');
			CODE4.push(num);
		}
	}
	else if (code5.checked == true)
	{
	//CODE5 click
		var num = $(this).text();
		if ($('.absClass.selected5') && CODE5.indexOf(num) > -1)
		{
			$(this).toggleClass('selected5');
			CODE5.splice(CODE5.indexOf(num), 1);
		}
		else
		{
			$(this).toggleClass('selected5');
			CODE5.push(num);
		}
	}
	});

}
function getCode(array)
{
	if (array.length > 0){
			var arr_name = prompt('Array name:','ARR_1')
			console.log("["+array+"]")
			prompt('Length:  ' + array.length,'var ' + arr_name + ' = [' + array + '];')
	}
	else{
			alert("Array is Empty!!");
	}
}
$('#selectRange').click(function(){
	var start = prompt('select firts light:','0');
	var end = prompt('select second light:','332');
	var divide = prompt('divide to number:','1')
	for (var i = start; i <= end; i++)
	{
		if (i%divide == 0)
		{
			var num = parseInt(i);
			if (code1.checked == true) {
				if ($('.absClass.selected') && CODE.indexOf(num) > -1)
				{
					nerkrum[i].toggleClass('selected');
					CODE.splice(CODE.indexOf(num), 1);
				}
				else
				{
					nerkrum[i].toggleClass('selected');
					CODE.push(num);
				}
			}
			
			else if (code2.checked == true)
			{
				if ($('.absClass.selected2') && CODE2.indexOf(num) > -1)
				{
					nerkrum[i].toggleClass('selected2');
					CODE2.splice(CODE2.indexOf(num), 1);
				}
				else
				{
					nerkrum[i].toggleClass('selected2');
					CODE2.push(num);
				}
			}
			else if (code3.checked == true)
			{
				if ($('.absClass.selected3') && CODE3.indexOf(num) > -1)
				{
					nerkrum[i].toggleClass('selected3');
					CODE3.splice(CODE3.indexOf(num), 1);
				}
				else
				{
					nerkrum[i].toggleClass('selected3');
					CODE3.push(num);
				}
			}
			
			else if (code4.checked == true)
			{
				if ($('.absClass.selected4') && CODE4.indexOf(num) > -1)
				{
					nerkrum[i].toggleClass('selected4');
					CODE4.splice(CODE4.indexOf(num), 1);
				}
				else
				{
					nerkrum[i].toggleClass('selected4');
					CODE4.push(num);
				}
			}
			else if (code5.checked == true)
			{
				if ($('.absClass.selected5') && CODE5.indexOf(num) > -1)
				{
					nerkrum[i].toggleClass('selected5');
					CODE5.splice(CODE5.indexOf(num), 1);
				}
				else
				{
					nerkrum[i].toggleClass('selected5');
					CODE5.push(num);
				}
			}
		}
	}
});

$('#tq').click(function(){
		getCode(CODE);
});
$('#ta').click(function(){
		getCode(CODE2);
	});
$('#ts').click(function(){
		getCode(CODE3);
	});
$('#tw').click(function(){
		getCode(CODE4);
	});
$('#te').click(function(){
		getCode(CODE5)
	});
$('#all').click(function(){
		var patuhan = window.open('all.html', 'CODE', 'width=auto, height=300');
		patuhan.document.write('var ARR_1 = [' + CODE + ']; <br> var ARR_2 = [' + CODE2 + ']; <br> var ARR_3 = [' + CODE3 + ']; <br> var ARR_4 = [' + CODE4 + ']; <br> var ARR_5 = [' + CODE5 + ']; <br> ');
	});
$('#clean1').click(function(){
	var allSelected  = $('.selected');
	allSelected.each(function(){
	$(this).toggleClass('selected') 
    });
	CODE = [];
	});
$('#clean2').click(function(){
	var allSelected  = $('.selected2');
	allSelected.each(function(){
	$(this).toggleClass('selected2') 
    });
	CODE2 = [];
	});
$('#clean3').click(function(){
	var allSelected  = $('.selected3');
	allSelected.each(function(){
	$(this).toggleClass('selected3') 
    });
	CODE3 = [];
	});
$('#clean4').click(function(){
	var allSelected  = $('.selected4');
	allSelected.each(function(){
	$(this).toggleClass('selected4') 
    });
	CODE4 = [];
	});
$('#clean5').click(function(){
	var allSelected  = $('.selected5');
	allSelected.each(function(){
	$(this).toggleClass('selected5') 
    });
	CODE5 = [];
	});
$('#HideShow').click(function(){
	if (HideShow.checked == true)
	{
		$('.absClass').css('font-size','10px')
	}
	else
	{
	$('.absClass').css('font-size','0px');
	}
})
});
