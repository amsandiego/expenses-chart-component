export default function getCurrentDay() {
  const currentDate = new Date();
  const options = { weekday: 'long' };

  return currentDate
    .toLocaleString('en-US', options)
    .slice(0, 3)
    .toLocaleLowerCase();
}
