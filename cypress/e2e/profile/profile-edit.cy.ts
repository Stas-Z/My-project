let profileId = ''

describe('User visits profile page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`profile/${data.id}`)
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('Check if profile page is open', () => {
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'test')
  })

  it('Edit profile', () => {
    const newName = 'new'
    const newLastName = 'lastname'
    cy.updateProfile(newName, newLastName)
    cy.getByTestId('ProfileCard.FirstName').should('have.value', newName)
    cy.getByTestId('ProfileCard.LastName').should('have.value', newLastName)
  })
})
