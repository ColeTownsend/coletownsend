// Wait for DOM
$(function (){
  
  // Global variables
  var $fb = $('a[data-fluidbox]'),
      vpRatio;
  
  // Add class
  $fb.addClass('fluidbox');
  
  // Create fluidbox modal background
  $('body').append('<div id="fluidbox-overlay" />');
 
  // The following events will force FB to close
  var closeFb = function (){
        $('a[data-fluidbox].fluidbox-opened').trigger('click');
      },
      positionFb = function ($activeFb){
        // Get elements
        var $img = $activeFb.find('img'),
            $ghost = $activeFb.find('.fluidbox-ghost');
        
        // Calculate offset and scale
        var offsetY = $(window).scrollTop()-$img.offset().top+0.5*($img.data('imgHeight')*($img.data('imgScale')-1))+0.5*($(window).height()-$img.data('imgHeight')*$img.data('imgScale')),
            offsetX = 0.5*($img.data('imgWidth')*($img.data('imgScale')-1))+0.5*($(window).width()-$img.data('imgWidth')*$img.data('imgScale'))-$img.offset().left,
            scale = $img.data('imgScale');
             
        // Animate ghost element
        // For offsetX and Y, we round to one decimal places
        // For scale, we round to three decimal places
        $ghost.css({
          'transform': 'translate('+parseInt(offsetX*10)/10+'px,'+parseInt(offsetY*10)/10+'px) scale('+parseInt(scale*1000)/1000+')'
        });
      }

  // Close Fluidbox when overlay is closed
  $('#fluidbox-overlay').click(closeFb);
  
  // Check if images are loaded first
  $fb.imagesLoaded().done(function (){
    
    // Create dynamic elements
    $fb
    .wrapInner('<div class="fluidbox-wrap" />')
    .find('img')
      .css({ opacity: 1 })
      .after('<div class="fluidbox-ghost" />');
    
    // Listen to resize event for calculations
    $(window).resize(function (){

      // Get viewport ratio
      vpRatio = $(window).width() / $(window).height();
      
      // Get dimensions and aspect ratios
      $fb.each(function (){
        var $img   = $(this).find('img'),
            $ghost = $(this).find('.fluidbox-ghost'),
            $wrap  = $(this).find('.fluidbox-wrap'),
            data   = $img.data();
        
        // Save image dimensions as jQuery object
        data.imgWidth  = $img.width();
        data.imgHeight = $img.height();
        data.imgRatio  = $img.width() / $img.height();
        
        // Resize and position ghost element
        $ghost.css({
          width: $img.width(),
          height: $img.height(),
          top: $img.offset().top - $wrap.offset().top,
          left: $img.offset().left - $wrap.offset().left,
        });
        
        Calculate scale based on orientation
        if(vpRatio > data.imgRatio) {
          data.imgScale = $(window).height()*.95 / $img.height();
        } else {
          data.imgScale = $(window).width()*.95 / $img.width();
        }
        
      });
      
      // Reposition Fluidbox, but only when one is found to be opened
      var $activeFb = $('a[data-fluidbox].fluidbox-opened');
      if($activeFb.length > 0) positionFb($activeFb);

    }).resize();
    
    // Bind click event
    $fb.click(function (e){
      
      // Variables
      var $activeFb = $(this),
          $img   = $(this).find('img'),
          $ghost = $(this).find('.fluidbox-ghost');
      
      if($(this).data('fluidbox-state') === 0 || !$(this).data('fluidbox-state')) {
        // State: Closed
        // Action: Open fluidbox
        
        // Switch state
        $(this)
        .data('fluidbox-state', 1)
        .removeClass('fluidbox-closed')
        .addClass('fluidbox-opened');
        
        // Show overlay
        $('#fluidbox-overlay').fadeIn();
        
        // Set thumbnail image source as background image first, preload later
        $ghost.css({
          'background-image': 'url('+$img.attr('src')+')',
          opacity: 1
        });
        
        // Hide original image
        $img.css({ opacity: 0 });
        
        // Preload ghost image
        var ghostImg = new Image();
        ghostImg.onload = function (){
          $ghost.css({ 'background-image': 'url('+$activeFb.attr('href')+')' });
        };
        ghostImg.src = $(this).attr('href');
        
        // Position Fluidbox
        positionFb($(this));

      } else {
        // State: Open
        // Action: Close fluidbox
        
        // Switch state
        $(this)
        .data('fluidbox-state', 0)
        .removeClass('fluidbox-opened')
        .addClass('fluidbox-closed');
        
        // Hide overlay
        $('#fluidbox-overlay').fadeOut();
        
        // Reverse animation on wrapped elements
        $ghost
        .css({ 'transform': 'translate(0,0) scale(1)' })
        .one('webkitTransitionEnd MSTransitionEnd oTransitionEnd otransitionend transitionend', function (){
          // Wait for transntion to complete before hiding the ghost element and showing the original image
          $ghost.css({ opacity: 0 });
          $img.css({ opacity: 1 });
        });

      }
      e.preventDefault();
    });
  });
});

// Defer pointer events on animated header
$(window).load(function (){
  $('header').css({
    'pointer-events': 'auto'
  });
});