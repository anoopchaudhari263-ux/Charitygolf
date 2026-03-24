export const generateDraw = () => {
  let nums = [];
  while (nums.length < 5) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!nums.includes(n)) nums.push(n);
  }
  return nums;
};