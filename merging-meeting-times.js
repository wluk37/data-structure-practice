// var example =   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// console.log(mergeRanges(example))

function mergeRanges(meetingTimes) {
  var condensedRanges = [];
  var sortedMeetingTimes = meetingTimes.slice().sort((range1, range2) => {
    return range1.startTime - range2.startTime;
  });
  var currentRange = { startTime: 0, endTime: 0 };

  for (var i = 0; i < sortedMeetingTimes.length; i++) {
    var currentStart = sortedMeetingTimes[i].startTime,
      currentEnd = sortedMeetingTimes[i].endTime;

    if (
      currentStart >= currentRange.startTime &&
      currentStart <= currentRange.endTime
    ) {
      currentRange.endTime = currentEnd;
      if (i === sortedMeetingTimes.length - 1) {
        condensedRanges.push(Object.assign({}, currentRange));
      }
    } else {
      condensedRanges.push(Object.assign({}, currentRange));
      currentRange.startTime = currentStart;
      currentRange.endTime = currentEnd;
    }
  }
  return condensedRanges;
}
