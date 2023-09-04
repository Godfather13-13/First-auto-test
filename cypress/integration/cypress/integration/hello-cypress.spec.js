const EMAIL = `raresketit@gmail.com`;
const PASSWORD = `125337Dima.`;


describe(`first aouto-test by Ivan Mushkambarian`, () => {
  it("login in the GiIt", () => {
    cy.visit(`https://www.edu.goit.global/ru/account/login`);
    cy.get(`#user_email`).type(EMAIL);
    cy.get(`#user_password`).type(PASSWORD);
    cy.get(`button[type="submit"]`).click();
    cy.get(`.next-1ib1no1`).should(`have.text`, `Привет, Дмитро Кулаков!`);
  });
});
