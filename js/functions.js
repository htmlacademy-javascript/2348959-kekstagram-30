const convertToMins = (time) => {
  const components = time.split (':');

  return parseInt (components[0], 10) * 60 + parseInt (components[1], 10);
}

const checkMeetTime = (begin, end, start, long) => {
  const beginWorkday = convertToMins(begin);
  const endWorkday = convertToMins(end);
  const startMeet = convertToMins(start);
  const longMeet = parseInt (long, 10);

  return beginWorkday <= startMeet && startMeet < endWorkday && (longMeet + startMeet) <= endWorkday;
};
