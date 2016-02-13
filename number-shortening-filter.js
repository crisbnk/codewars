// Number Shortening Filter
// Create a function which return another function (or process, in Ruby) that shortens numbers which are too long,
// given an initial arrays of values to replace the Xth power of a given base;
// if the input of the returned function is not a numerical string, it should return the input itself as a string.
// filter1 = shortenNumber(['','k','m'],1000);
// filter1('234324') == '234k';
// filter1('98234324') == '98m';
// filter1([1,2,3]) == '1,2,3';

function shortenNumber(suffixes, base) {
  return function(number) {
    var n = parseInt(number);
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(number)) {
      var index = 0;
      var power = 1;
      for(var i = 0; i < suffixes.length; i++) {
        var p = Math.pow(base, i);
        if(n < p) {
          break;
        }
        power = p;
        index = i;
      }
      var nRes = Math.floor(n / power) + suffixes[index];
      return nRes;
    } else {
      return number.toString()
    }
  }
}
