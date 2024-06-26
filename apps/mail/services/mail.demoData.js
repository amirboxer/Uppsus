'use strict'

import {utilService} from "../../../services/util.service.js"

let curIdNum = 0



const mails = [
    {
        id: 'e101',
        createdAt: 1551133930500,
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }

]

function generateRandomEmail() {
    return {
        id: `e${curIdNum++}`
    }
}


function generateRandomEmail() {
    const domains = ['example.com', 'test.com', 'demo.com', 'email.com', 'mail.com'];
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let email = '';

    // Generate the username part of the email (5 to 10 characters long)
    const usernameLength = Math.floor(Math.random() * 6) + 5;
    for (let i = 0; i < usernameLength; i++) {
        email += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Add the '@' symbol
    email += '@';

    // Choose a random domain from the list
    email += domains[Math.floor(Math.random() * domains.length)];

    return email;
}

console.log(generateRandomEmail());
