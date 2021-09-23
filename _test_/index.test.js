const request = require("supertest");
const app = require("../testt");

describe("Get route", () => {
  it("page should return welcome to my server!", async (done) => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Welcome to my server!");
    done();
  });
});

afterAll(async () => {
  await app.close();
});