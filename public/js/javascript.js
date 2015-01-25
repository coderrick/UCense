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
