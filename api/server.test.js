const db = require('../data/dbConfig')

describe('test the sanity & environment', () => {
  test('[1] sanity', () => {
    expect(true).toBe(true)
  })  
  test('[2] NODE_ENV is correct', () => {
    expect(process.env.NODE_ENV).toBe('testing');    
  })
})

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
afterAll(async () => {
  await db.destroy()
})

describe('GET /api/jokes', () => {
  it.todo('[3] no token cannot see jokes');
  it.todo('[4] no valid token can see jokes');
});