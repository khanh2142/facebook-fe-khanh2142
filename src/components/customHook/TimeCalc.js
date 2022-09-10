export default function TimeCalc(time) {
  const date = new Date(time ? time : "2022-04-26T08:38:05.664+00:00");
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  new Intl.DateTimeFormat("it-IT").format(date);
  return new Intl.DateTimeFormat("it-IT", options).format(date);
}
