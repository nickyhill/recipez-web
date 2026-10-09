// Builds the contact address at runtime so it never appears in the HTML source,
// which keeps it away from simple email-harvesting bots.
var CONTACT_EMAIL = 'moc.liamg@zepicer+sagnellihn'.split('').reverse().join('');

document.querySelectorAll('.contact-email').forEach(function (link) {
  link.href = 'mailto:' + CONTACT_EMAIL;
  link.textContent = CONTACT_EMAIL;
});
