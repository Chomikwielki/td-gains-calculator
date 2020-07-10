// 1. Search via hashtag (e.g. #followforfollow)
// 2. On desktop, click an image to start from
// 3. Run code. Limit controls how many times the code run.

var i = 0,
  j = 0,
  totalLimit = 400,
  limit = 30,
  waitTime = 8000,
  randomTime = (minSec, maxSec) => {
    return Math.round(Math.random() * (maxSec - minSec) + minSec) * 1000;
  },
  follower = {
    qa: true,
    init: function () {
      if (follower.qa) {
        console.log('%cQA MODE IS ON', 'color:red;font-weight:800');
        console.log('Script loading...');
      }
      i++;
      j++;
      if (j < totalLimit) {
        follower.follow();
        if (i === limit) {
          if (waitTime <= 8000) {
            waitTime = randomTime(3600, 4500);
          }
          i = 0;
        } else {
          waitTime = randomTime(6, 8);
        }
      }
    },
    follow: function () {
      const followTimeout = randomTime(3, 4);
      setTimeout(function () {
        if (follower.qa) {
          console.log('%cClicked on: ' + 'Follow', 'color:blue');
        }
        Array.from(document.querySelectorAll('button'))
          .find((el) => el.textContent === 'Follow')
          .click();
        follower.next();
      }, followTimeout);
    },
    next: function () {
      const nextTime = randomTime(1, 2);
      setTimeout(function () {
        if (follower.qa) {
          console.log('%cClicked on: ' + 'Next', 'color:green');
        }
        document
          .getElementsByClassName('coreSpriteRightPaginationArrow')[0]
          .click();
        setTimeout(function () {
          follower.init();
        }, waitTime);
      }, nextTime);
    },
  };

follower.init();
