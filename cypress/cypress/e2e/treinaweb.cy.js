describe('Verifica se existe o curso php, e preenche os dados para matrícula.', () => {
  it('passes', () => {
    cy.visit('https://www.treinaweb.com.br/')
    cy.get('nav > .btn-search').click();
    cy.get('input[name="q"]').type('php{enter}');
    cy.get('li[title="PHP - Fundamentos"] > .name > .text-link').click();
    cy.get('.col-lg-10 > .btn').click();
    cy.get('input[name="nome"]').invoke('val', 'teste');
    cy.get('input[name="email"]').invoke('val', 'teste@teste.com.br');
    cy.get('input[name="celular"]').invoke('val', '5199999999');

  })
})