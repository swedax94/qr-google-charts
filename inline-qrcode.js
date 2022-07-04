function qrcode_code() {
  var url = $( '#copylink' ).attr('value');
  var qrcimg = `https://image-charts.com/chart?chs=100x100&cht=qr&chld=M&chof=.png&chl=${url}`;
  var qrcPNGlnk = `https://image-charts.com/chart?chs=500x500&cht=qr&chld=M&chof=.svg&chl=${url}`;
  var qrcSVGlnk = `https://image-charts.com/chart?chs=500x500&cht=qr&chld=M&chof=.svg&chl=${url}`;	
  var insertimg = `<div id='qrcode2' class='share'><a href="${qrcSVGlnk}" target='_blank'><img id='myid' src='${qrcimg}' /></a>SVG</div> <div id='qrcode3' class='share'><a href='${qrcPNGlnk}' target="_blank"><img id='myid' src='${qrcimg}' /></a>PNG</div>`;

  if ( $( '#qrcode2' ).length > 0 ) {
    $( '#qrcode2' ).remove( );
  }
  if ($( "#shareboxes" )) {  
    $( "#shareboxes" ).append( insertimg );        // Append new elements
    $( "div#qrcode2 img" ).css( "width", "100px" );
    $( "div#qrcode2 img" ).css( "height", "100px" );
    $( "div#qrcode3 img" ).css( "width", "100px" );
    $( "div#qrcode3 img" ).css( "height", "100px" );
  }

}

$(document).ready( function(){qrcode_code() } );
