window.onload = function () 
{
  var type = new Typed('#typed',
  {
      stringsElement: '#strings',
      typeSpeed: 200,
      startDelay: 1200,
      backSpeed: 20,
      backDelay: 1200,
      loop: false,
      loopCount: 3,
      showCursor: false,
      cursorChar: "|",
      attr: null,
      contentType: 'html',
      callback: function() {},
      preStringTyped: function() {},
      onStringTyped: function() {},
      resetCallback: function() {}
    });
}