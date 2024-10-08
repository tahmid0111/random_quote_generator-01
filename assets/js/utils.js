export function getQuoteId() {
  // Get the current day of the year (1 to 365)
  const today = new Date();
  const dayOfWeek = today.getDay();
  addBackgroundImage(dayOfWeek);
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) + 1; // Ensure we start from day 1
  return dayOfYear;
}

// adding background-image
export function addBackgroundImage(dayOfWeek) {
  let myBackgroundImage;
  if (dayOfWeek === 0) {
    myBackgroundImage =
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1728397364/daily-motivation/6_k4f41m.jpg";
  }
  if (dayOfWeek === 1) {
    myBackgroundImage =
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1728397285/daily-motivation/0_gmsbsa.jpg";
  }
  if (dayOfWeek === 2) {
    myBackgroundImage =
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1728397305/daily-motivation/1_oj30xp.jpg";
  }
  if (dayOfWeek === 3) {
    myBackgroundImage =
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1728397325/daily-motivation/2_iwhgqt.jpg";
  }
  if (dayOfWeek === 4) {
    myBackgroundImage =
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1728397342/daily-motivation/3_hfq6rv.jpg";
  }
  if (dayOfWeek === 5) {
    myBackgroundImage =
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1728397347/daily-motivation/4_vkyble.jpg";
  }
  if (dayOfWeek === 6) {
    myBackgroundImage =
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1728397375/daily-motivation/5_a04dbj.jpg";
  }
  document.body.style.backgroundImage = `url(${myBackgroundImage})`;
}
