function clickUiBounds(ui) {
  if (ui) {
    var a = ui.findOnce();
    if (a) {
      var b = a.bounds();
      if (b) {
        click(b.centerX(), b.centerY());
        return true;
      }
    }
  }
  return false;
}
function childClickUiBounds(ui) {
  if (ui) {
    if (ui) {
      var b = ui.bounds();
      if (b) {
        click(b.centerX(), b.centerY());
        return true;
      }
    }
  }
  return false;
}
let 点过的 = [];//需要存本地记录
let 内容停留操作 = () => {
  let gmf = id("gmf").find();
  console.log(gmf.length, "-=gmf");
  if (gmf.length) {
    // 视频
    sleep(10000);
    click(500, 500);
    click(500, 500);
    click(500, 500);
    sleep(1000);
  } else {
    // 图文
    sleep(2000);
    for (let index = 0; index < 10; index++) {
      let is = swipe(700, 500, 200, 500, 700);
      sleep(500);
      if (!is) {
        break;
      }
    }
    for (let index = 0; index < 5; index++) {
      let is = swipe(200, 500, 700, 500, 50);
      sleep(100);
      if (!is) {
        break;
      }
    }
  }
  back();
  sleep(1000);
  back();
  sleep(2000);
  returnClick();
};
let 用户主页点击 = () => {
  id("dk7")
    .findOne()
    .children()
    .forEach((child) => {
      swipe(device.width / 2, 800, device.width / 2, 500, 1000);
      sleep(1000);
      let target = child.findOne(id("dzz"));
      let list = target.find(id("aai"));
      let list1 = list.filter((item) => {
        let gby = item.findOne(id("gby"));
        let cjx = item.findOne(id("cjx"));
        // 返回没有点过赞的和点赞数小于150的
        return !cjx.selected() && (gby.text() < 150 || gby.text() == "赞");
      });
      list1.forEach((item) => {
        childClickUiBounds(item);
        sleep(1000);
        内容停留操作();
      });
    });
};
let returnClick = () => {
  id("gon")
    .findOne()
    .children()
    .forEach((child) => {
      let list = child.find(id("gcg"));
      let list1 = list.filter((item) => {
        return (
          !点过的.includes(item.text()) &&
          item.bounds().centerY() < device.height &&
          item.bounds().centerX() < device.width &&
          item.bounds().centerX() > 0
        );
      });
      if (list1.length) {
        list1.forEach((element) => {
          let gcg = element.text();
          if (!点过的.includes(gcg)) {
            点过的.push(gcg);
            childClickUiBounds(element);
            sleep(1000);
            用户主页点击();
          }
        });
      } else {
        // 没有数据则往上滑动一整屏
        swipe(
          device.width / 2,
          device.height - 70,
          device.width / 2,
          400,
          2000
        );
        sleep(1000);
        returnClick();
      }
    });
};
returnClick();
