import './style.css'

const pie = document.querySelector('.pie')

const input = document.querySelector('input')

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  pie.style = `--val:${e.target.value}%`
})
