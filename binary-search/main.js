function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) /2);
    let guess = list[mid];
    if (guess == item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
}

const my_list = [11, 25, 34, 55, 101, 180, 190, 255, 500];

console.log(binary_search(my_list,101));
console.log(binary_search(my_list, -1));