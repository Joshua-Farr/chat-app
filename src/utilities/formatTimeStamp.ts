export const formatTimeStamp = (time: Date) => {
  if (time != undefined) {
    let formattedTimeString = "";

    // Making sure that this is actually a date object
    const dateTime = time instanceof Date ? time : new Date(time);

    const formattedHours =
      dateTime.getHours() > 12 ? dateTime.getHours() - 12 : dateTime.getHours();
    const formattedMinutes = dateTime.getMinutes().toString().padStart(2, "0");

    const suffix = dateTime.getHours() > 12 ? "pm" : "am";

    formattedTimeString = `${formattedHours}:${formattedMinutes} ${suffix}`;

    return formattedTimeString;
  } else return;
};
