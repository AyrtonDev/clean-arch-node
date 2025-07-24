import app from '../config/app'
import request from 'supertest'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Ayrton',
        email: 'ayrton.guerra@gmail.com',
        password: '1234',
        passwordConfirmation: '1234',
      })
      .expect(200)
  })
})
