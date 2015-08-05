function AposLocalization() {
  var self = this;
  self.modal = function() {
    $.post('/apos-localization/report', function(data) {
      self.$el = apos.modal($(data), self);
    });
  };

  // Invoked when the modal is ready
  self.init = function(callback) {
    self.$pageContent = self.$el.find('[data-page-content]');
    self.$el.on('click', '[data-page]', function() {
      var page = $(this).attr('data-page');
      $.post('/apos-localization/report', { page: page }, function(data) {
        self.$pageContent.html($(data));
      });
      return false;
    });
    return callback(null);
  };

  self.setup = function() {
    $('[data-localization-report-button]').click(function() {
      self.modal();
      return false;
    });
  };

  // So it's possible to override self.setup
  apos.afterYield(function() {
    self.setup();
  });
}
