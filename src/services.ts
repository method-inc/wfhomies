import fetch from 'node-fetch';

export const postToDb = (data: object) => {
    console.log('_____________');
    console.log('postToDb Output');
    console.log(data);
    console.log('_____________');
    fetch('https://wfhomies.firebaseio.com/users.json', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

// const getDailyLog = () => {

// };
