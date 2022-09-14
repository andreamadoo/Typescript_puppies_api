// import request from 'supertest';
// import app from './app';


// describe('Testing api endpoint', () => {
//   test('sanity check for /test', async () => {
//     const res = await request(app).get('/api/test');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual({
//       test: 'is working as it should',
//     });
//   });
// });

// describe('Testing api endpoint for the puppies API', () => {
//   test('get puppies list', async () => {
//     const res = await request(app).get('/api/puppies');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual(puppies);
//   });

//   test('get a specific puppy from the list', async () => {
//     const res = await request(app).get('/api/puppies/1');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.breed_name).toEqual("Jean2");  
//   });

//   test('get an error message 404 puppy is not in the list', async () => {
//     const res = await request(app).get('/api/puppies/11');
//     expect(res.statusCode).toEqual(404); 
//   });
//});
