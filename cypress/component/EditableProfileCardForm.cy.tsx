import { EditableProfileCardForm } from '../../src/features/EditableProfileCard'
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender'

const USER_ID = '1'

describe('EditableProfileCardForm.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                id: USER_ID,
              },
            },
          },
        }}
      >
        <EditableProfileCardForm id={USER_ID} />
      </TestProvider>,
    )
  })
})
