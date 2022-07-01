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
const aaa = () => {
  let a = id("ac8");
  clickUiBounds(a);
  sleep(500);
  swipe(0, 1000, 500, 1000, 500);
};

for (let index = 0; index < 10000; index++) {
  aaa();
  sleep(500);
}

/* setInterval(() => {
  aaa();

}, 3000); */
