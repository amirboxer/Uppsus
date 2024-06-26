'use strict'
// imports

//############################### maybe change##############################################
import { utilService } from "../../../services/util.service.js"
//##########maybe#####maybe#######maybe######### maybe change##############################################


export const mailService = {
    generateDemoMails,
}

// +-+-+-+-+-+-+-+-+-+-+-+-  globals  +-+-+-+-+-+-+-+-+-+-+-+- // 
//#############maybe################## maybe change####################maybe##########################
const MAILS_LCS_KEY = 'MAILS_LCS_KEY'
const USER_IDENTIFIERS = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
//########maybe######maybe#######maybe########## maybe change###############maybe##########maybe#####################


// +-+-+-+-+-+-+-+-+-+-+-+- demo data +-+-+-+-+-+-+-+-+-+-+-+-//
function generateDemoMails(mailCount = 400) {   // only numbers that are diveded by 4
    // check if there are any mails im lcl storage
    let mails = utilService.loadFromStorage(MAILS_LCS_KEY)
    if (!(!mails || !mails.length)) return

    // else, create demo data
    let curIdNum = 0
    mails = []

    // Incoming emails
    for (let i = 0; i < mailCount * 0.75; ++i) {
        mails.push(_generateUserRandomEmail(`e${curIdNum++}`))
    }

    // outgoing emails
    for (let i = 0; i < mailCount * 0.25; ++i) {
        mails.push(_generateUserRandomEmail(`e${curIdNum++}`, true))
    }

    mails.sort((m1, m2) => m2.sentAt - m1.sentAt)
    // store in lcs
    utilService.saveToStorage(MAILS_LCS_KEY, mails)
}

function _generateUserRandomEmail(id, userEmails = false) {
    const twoYears = 60 * 60 * 24 * 365 * 2 * 1000
    const onWeek = 60 * 60 * 24 * 7 * 1000
    const today = Date.now()
    const sentAt = utilService.getRandomIntInclusive(today - twoYears, today)
    return {
        id,
        createdAt: Math.random() > utilService.getRandomIntInclusive(sentAt - onWeek, sentAt),
        subject: _generateRandomEmailSubject(),
        body: _generateRandomEmailBody(),
        isRead: userEmails ? true : Math.random() > 0.4 ? true : false,
        sentAt,
        removedAt: Math.random() > 0.7 ? null : utilService.getRandomIntInclusive(sentAt, today),
        from: userEmails ? USER_IDENTIFIERS.email : _generateRandomEmailAddress(),
        to: _generateRandomEmailAddress(),
    }
}


function _generateRandomEmailSubject() {
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


function _generateRandomEmailBody() {
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

function _generateRandomEmailAddress() {
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