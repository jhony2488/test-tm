//nav
$('.nav-link-item').hide()
let decision = false
//caso o usuario clique fora quando a nav estiver aberta
$('.nav-link-item').mouseleave(function () {
  $('body').click(function () {
    $('.nav-link-item').hide()
    location.reload()
  })
})

$('.button-hamburger').click(function () {
  decision = !decision
  if (decision) {
    $('.nav-link-item').show()
  } else {
    $('.nav-link-item').hide()
  }
})
