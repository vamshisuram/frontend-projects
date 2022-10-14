import "./style.css";

const loader = document.querySelector('.loader')

const container = document.querySelector('.container')

const observer = new IntersectionObserver((entries) => {
  // console.log(entries[0].target.className);
  if (!entries[0].isIntersecting) return;
  console.log(entries[0].isIntersecting); // if true trigger new call!
  // get new entries and append to element

  setTimeout(() => {
    let newHtml = ''
    for (let i = 0; i < 10; i++) {
      newHtml += `<div class="card">card${i}</div>`
    }
    const template = document.createElement('template');
    template.innerHTML = newHtml;
    container.insertAdjacentHTML('beforeend', newHtml)
  }, 500);


  // [...template.content.childNodes].forEach(node => {
  //   container.appendChild(node)
  // })
})

observer.observe(loader)