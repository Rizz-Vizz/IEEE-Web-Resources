# Task 3: Debugging Challenge

Here are my fixes for code.

---
## Part A:  JavaScript

### Problem

There were mainly two problems in the code:

1. The loop was printing `"Iteration: 3"` three times instead of `0, 1, 2`.  
   The happened because the code uses `var`, which doesn’t store a separate value of `i` for each loop iteration. The loop finishes almost instantly, but `setTimeout` runs after 1 second. By then, `i` is already 3, so it prints `"3"` instead of `0, 1, 2`.


2. The code directly updated `innerText` without checking whether the element with id `"display"` actually exists.  
   If the element is missing in the HTML, the code can crash.

 **Broken Output Screenshot:**  
![Broken Output](3.png)

---

### Solution

- Replaced `var` with `let` so each loop iteration keeps its own correct value of `i`.
- Added a safety check before updating the DOM to make sure the `"display"` element exists and avoid runtime errors.

---

### Corrected Code

```javascript
function Counter() {
  let count = 0;

  const handleIncrement = () => {
    count = count + 1;
    console.log("Count is now: " + count);

    const display = document.getElementById("display");
    if (display) {
      display.innerText = count;
    }
  };

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("Iteration: " + i);
    }, 1000);
  }

  return handleIncrement;
}