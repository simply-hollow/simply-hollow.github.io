$('.count-number').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 3000,
    easing: 'easeInOutQuart',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});