const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

const jokes = require("./jokes/jokes-data");
const bcrypt = require("bcryptjs")
const { BCRYPT_ROUNDS } = require("../secret")

const validAuthOne = { username: "Captain Marvel", password: "1234" }
const invalidAuthOne = { username: "", password: "1234" };
const invalidAuthTwo = { username: "Captain Marvel", password: "" };

describe('test the sanity & environment', () => {
  test('[1] sanity', () => {
    expect(true).toBe(true)
  })  
  test('[2] NODE_ENV is correct', () => {
    expect(process.env.NODE_ENV).toBe('testing');    
  })
})

beforeEach(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
afterAll(async () => {
  await db.destroy()
})

describe('[POST] /api/auth/login', () => {
  beforeEach(async () => {
    const hash = bcrypt.hashSync(validAuthOne.password, Number(BCRYPT_ROUNDS));
    await db("users").insert({
      username: validAuthOne.username,
      password: hash,
    });
  });
  it ('[3] valid token can login', async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send(validAuthOne);
    expect(res.body.message).toBe("welcome, Captain Marvel");
  });
  
});



