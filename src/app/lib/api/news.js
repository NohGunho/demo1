import client from './client';

//hit TOP5
export const hit = () =>
    client.get('/api/hit');