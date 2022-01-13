const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.thrillophilia.com/image/upload/s--R6gz-4tF--/c_fill,g_center,h_210,q_auto,w_350/f_auto,fl_strip_profile/v1/attractions/images/000/005/145/original/1581421578_fort.jpg.jpg" alt=""/>'
  title.innerHTML = 'WARANGAL FORT'
  excerpt.innerHTML =
    'Kakatiya Kala Thoraman happens to be a historical arch in the Indian state of Telangana whose architecture is highly inspired by the Kakatiya dynasty.'
  profile_img.innerHTML =
    '<img src="https://lh3.googleusercontent.com/ogw/ADea4I5aOZSQvoZHbBFvpyZRtbqZEkCLVjOxC6-2KZadbIQ=s32-c-mo" alt="" />'
  name.innerHTML = 'Bharath Reddy'
  date.innerHTML = 'jan 13, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}