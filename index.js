for (let index = 0; index < 5; index++) {
  setTimeout(
    () => {
      console.log(index);
    },
    (index + 1) * 1000,
  );
}
