$('.tobereplaced').click(function(ev) {
  let text = $(this).hasClass('applffe')
  console.log(text)
})

$('.outer').click((ev) => {
  const attr = $(ev.target).html();
  console.log(attr);
});
