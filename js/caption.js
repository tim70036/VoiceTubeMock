var wrapper = $('#caption_detail');
for(var key in captions.en){
	//var end = Number(captions.en[key].start) + Number(captions.en[key].dur);
	container = $('<div id=show-caption-table"><'+'/'+'div>');
	wrapper.append(container);
	container.append(
		'<td class="align-top" width="25">'+
			'<a href="javascript:;" onclick="playCaptions('+Number(captions.en[key].start)+', '+Number(captions.en[key].dur)+');">' +
				'<span class="glyphicon glyphicon-play"></span>'+
			'</a>'+
			//'<div id="seq-' + key + '" start="'+captions.en[key].start+'" end="'+ Number(captions.en[key].dur) +'">' +captions.en[key].text + '</div>'+
		'</td>');
	
	container.append('<td id="seq-' + key + '" start="'+captions.en[key].start+'" end="'+ Number(captions.en[key].dur) +'">' +captions.en[key].text + '</td>');
}