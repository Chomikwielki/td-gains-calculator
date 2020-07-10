// 1. View suggested accounts
// 2. Run code. Limit controls how many times the code run.

var i = 0,
  limit = 5,
  follower = {
    qa: true,
    init: function () {
      if (follower.qa) {
        console.log('%cQA MODE IS ON', 'color:red;font-weight:800');
        console.log('Script loading...');
      }
      setTimeout(function () {
        follower.follow();
        i++;
        if (i < limit) {
          follower.init();
        }
      }, 8000);
    },
    follow: function () {
      setTimeout(function () {
        if (follower.qa) {
          console.log('%cClicked on: ' + 'Follow', 'color:blue');
        }
        Array.from(document.querySelectorAll('button'))
          .find((el) => el.textContent === 'Follow')
          .click();
      }, 4000);
    },
  };
follower.init();
