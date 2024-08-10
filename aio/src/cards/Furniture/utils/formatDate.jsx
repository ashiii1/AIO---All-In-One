export const FormatDate = (date) => {
  // const currentDate = new Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // console.log(currentDate);

  const d = new Date(date);
  let month = months[d.getMonth()];
  let day = d.getDate();

  return [month, day];
};
