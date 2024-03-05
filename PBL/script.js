

let array = [];
let stopSortingFlag = false;



function generateArray(size) {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    array.push(value);
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar);
  }
}
generateArray(40);

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

async function bubbleSort() {
  const arrayContainer = document.getElementById('arrayContainer');
  for (let i = 0; i < array.length - 1 && !stopSortingFlag; i++) {
    for (let j = 0; j < array.length - i - 1 && !stopSortingFlag; j++) {
      const bars = arrayContainer.querySelectorAll('.bar');
      bars[j].style.backgroundColor = 'black';
      bars[j + 1].style.backgroundColor = 'gray';
      await new Promise(resolve => setTimeout(resolve, 100 - document.getElementById('speedRange').value));
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        arrayContainer.innerHTML = '';
        array.forEach(value => {
          const bar = document.createElement('div');
          bar.classList.add('bar');
          bar.style.height = `${value * 3}px`;
          arrayContainer.appendChild(bar);
        });
      }
      bars[j].style.backgroundColor = 'black';
      bars[j + 1].style.backgroundColor = 'black';
    }
  }
}

function startSorting() {
  stopSortingFlag = false;
  bubbleSort();
}

function stopSorting() {
  stopSortingFlag = true;
}

function resetArray() {
  stopSortingFlag = true;
  array = [];
  const size = parseInt(document.getElementById('arraySizeInput').value);
  generateArray(size);
}


function fn()
{
  
  document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  })

}
fn();
function fn1()
{
  
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
  })

}
fn1();

