 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
	  
	  $(function() {
			$("#mutebtn").click(function(){
				player.mute();
				console.log(player.getCurrentTime());
				var sound = new Howl({
					urls: ['static/censor-beep1.mp3']
				}).play();
				console.log( "ready!" );
			});			
		});
//////////////////////////////////////////////////////////////////////////
/*
					YOUTUBE SEARCH
*/
////////////////////////////////////////////////////////////////////////
/* AutoComplete */
/**
$("#youtube").autocomplete({
    source: function(request, response){
        
        var apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
     
        var query = request.term;
    
        $.ajax({
            url: "http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",  
            dataType: 'jsonp',
            success: function(data, textStatus, request) { 
               response( $.map( data[1], function(item) {
                    return {
                        label: item[0],
                        value: item[0]
                    }
                }));
            }
        });
    },
  
    select: function( event, ui ) {
        $.youtubeAPI(ui.item.label);
    }
});


$('button#submit').click(function(){
    var value = $('input#youtube').val();
        $.youtubeAPI(value);
});


$.youtubeAPI = function(kelime){
    var sonuc = $('#sonuc');
    sonuc.html('Arama gerçeklestiriliyor...');
    $.ajax({
        type: 'GET',
        url: 'http://gdata.youtube.com/feeds/api/videos?q=' + kelime + '&max-results=15&v=2&alt=jsonc',
        dataType: 'jsonp',
        success: function( veri ){
            if( veri.data.items ){
                sonuc.empty();
                $.each( veri.data.items, function(i, data) {
                    sonuc.append('<div class="youtube">\
                        <img src="' + data.thumbnail.sqDefault + '" alt="" />\
                        <h3><a href="javascript:void(0)" onclick="$.youtubePlay(\'' + data.id + '\', \'' + data.content[5] + '\')">' + data.title + '</a></h3>\
                        <p>' + data.description + '</p>\
                    </div>\
                    <div class="youtubeOynat" id="' + data.id + '"></div>');
                });
            }
            else {
                sonuc.html('<div class="hata"><strong>' + kelime + '</strong> ile ilgili hiç video bulunamadi!</div>');
            }
        }
    });
}


$.youtubePlay = function(yid, frame){
    $('.youtubeOynat').slideUp().empty();
    $('#'+yid).slideDown().html('<iframe src="'+ frame +'&autoplay=1" style="width: 100%; box-sizing: border-box; height: 300px" />');
}
*/
//////////////////////////////////////////////////////////////////////////
/*
					XML PARSING BELOW
*/
//////////////////////////////////////////////////////////////////////////
var x = $.ajax({
    type: 'GET',
    url: 'http://video.google.com/timedtext?lang=en&v=Mn81s7BhunM',
    dataType: 'xml',
    success: parseXml
});
function parseXml(xml)
{
    var node = $(xml).find('text').eq(1).text()//.attr("dur");
    var node1 = $(xml).find('text').eq(1).attr('start')
    console.log(node)
    console.log(node1)
  //find every Tutorial and print the author
  $(xml).find("transcript").each(function()
  {
      
    //$("#output").append($(this).attr("start") + "<br />");
  });
console.log(xml);
}
//console.log('I xml too: ' + x.dataType);
