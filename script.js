//your JS code here. If required.
cy.get('li a')
  .should('have.css', 'cursor', 'pointer')

cy.get('li').should($li => {
  expect($li.css('padding')).to.exist
  expect($li.css('margin')).to.exist
})