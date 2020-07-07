// ENTER STOCK SYMBOL
var symbol = '';

// STYLING
var css_header = 'font-size: 32px',
  css_body = 'background: #4ec5a5; color: #fff; padding: 20px;font-size: 42px';
theSelector = $('.headerrows.isCovered')
  .find('.Symbol:contains(' + symbol + ')')
  .siblings('.Gain');

// HELPER FUNCTION
addAllGains = function (selector) {
  var sum = 0;
  $(selector).each(function () {
    sum += parseFloat(this.innerText.replace(',', ''));
  });
  return new Intl.NumberFormat().format(sum.toFixed(2));
};

// TOTAL GAINS
console.log('%c\n\nTotal ' + symbol + ' gains:\n\n', css_header);
console.log('%c$' + addAllGains(theSelector), css_body);

// CHECK VALUES
console.log('%c\n\nCheck ' + symbol + ' values:\n\n', css_header);
var theSelector = $('.headerrows.isCovered')
  .find('.Symbol:contains(' + symbol + ')')
  .each(function () {
    console.log(this);
  });
