function countdown(s, cb) {
  if (s === 0) {
    cb();
    return;
  }

  console.log(s);

  setTimeout(() => {
    countdown(s - 1, cb);
  }, 1000);
}

countdown(5, () => {
  console.log("Yeay!");
});
