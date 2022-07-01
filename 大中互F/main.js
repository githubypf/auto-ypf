home();
launchApp("大众点评");

/* sleep(2000);
let 我 = text("我的");
clickUiBounds(我);
sleep(1000);
let a = descStartsWith("关注").visibleToUser();
clickUiBounds(a);
sleep(1000);
let b = text("关注");
clickUiBounds(b);
sleep(1000);
// 点击第一个关注用户
let list = className("android.support.v7.widget.RecyclerView").findOne();
list.children().forEach((child, index) => {
    if (index === 1) {
        childClickUiBounds(child);
        sleep(1000);
    }
});
sleep(1000);
let d = desc("粉丝");
clickUiBounds(d);
sleep(1000); */
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
let scrollUpdate = () => {
  sleep(1000);
  scrollDown(0);
  sleep(1000);
  getScrollList();
};

let getScrollList = () => {
  let list1 = className("android.support.v7.widget.RecyclerView").findOne();
  let list2 = list1.children().filter((child, index) => {
    var like = child.findOne(textContains("粉丝"));
    return (
      like &&
      like.text &&
      like.text().substring(2) > 1000 &&
      like.text().substring(2) < 5000
    );
  });
  list2.forEach((child, index) => {
    var like = child.findOne(textContains("粉丝"));
    childClickUiBounds(like);
    sleep(1000);
    let 发消息 = textContains("发消息");
    if (发消息.findOnce()) {
      sleep(1000);
      back();
      scrollUpdate();
    } else {
      let 关注 = desc("关注").find();
      关注.forEach((item, index1) => {
        if (index1 == 1) {
          childClickUiBounds(item);
        }
      });
      sleep(1000);
      back();
      scrollUpdate();
    }
  });
};
getScrollList()