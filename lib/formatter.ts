import formatDuration from 'format-duration';

export const formatTime = (duration = 0) => {
  return formatDuration(duration * 1000);
};

export const formatDate = (date = new Date()) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
