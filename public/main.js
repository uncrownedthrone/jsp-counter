const main = () => {
  if (document.querySelector('h1')) {
    document.querySelector('h1').textContent = "We're going to make a counter."
  }
}

document.addEventListener('DOMContentLoaded', main)
