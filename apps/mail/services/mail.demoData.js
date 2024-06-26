'use strict'

//import { utilService } from "../../../services/util.service.js"

let curIdNum = 0

function generateRandomEmail() {
    return {
        id: `e${curIdNum++}`,
        createdAt: getRandomIntInclusive(0, Date.now()),
        subject: generateRandomEmailSubject(),
        body: generateRandomEmailBody(),
        isRead: Math.random() > 0.4 ? true : false
    }
}

function generateRandomEmailSubject() {
    const adjectives = ['Important', 'Urgent', 'New', 'Updated', 'Final', 'Weekly', 'Monthly'];
    const nouns = ['Project', 'Meeting', 'Update', 'Report', 'Reminder', 'Schedule', 'Agenda'];
    const phrases = ['for Review', 'Regarding Your Request', 'Action Required', 'Details Inside', 'Follow-Up Needed', 'for Approval', 'FYI'];

    // Helper function to get a random element from an array
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Generate a random subject
    const subject = `${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(phrases)}`;
    return subject;
}


function generateRandomEmailBody() {
    const subjects = ['The project', 'Your request', 'Our meeting', 'The document', 'Your feedback', 'The team', 'Your appointment'];
    const verbs = ['has been approved', 'was discussed', 'needs attention', 'has been completed', 'is pending', 'requires review', 'has been rescheduled'];
    const objects = ['as soon as possible', 'at your earliest convenience', 'by the end of the day', 'before the deadline', 'for the next meeting', 'with the client', 'for further discussion'];

    // Helper function to get a random element from an array
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Generate a random sentence
    const sentence = `${getRandomElement(subjects)} ${getRandomElement(verbs)} ${getRandomElement(objects)}.`;

    return sentence;
}

function generateRandomEmailAddress() {
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

function tst() {
    const createdAt = getRandomIntInclusive(0, Date.now())
    return {
        id: `e${curIdNum++}`,
        createdAt,
        subject: generateRandomEmailSubject(),
        body: generateRandomEmailBody(),
        isRead: Math.random() > 0.4 ? true : false,
        tst : getRandomIntInclusive(createdAt, Date.now()),
    }
}

console.log(tst())

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}