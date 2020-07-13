const angular = require('angular');

angular.module('reg')
    .constant('EVENT_INFO', {
        NAME: 'HackTAMS Fall 2020',
    })
    .constant('DASHBOARD', {
        UNVERIFIED: 'You should have received an email asking you verify your email. (Check spam folder) Click the link in the email and you can start your registration! If you have any questions/concerns, or run into any errors, please reach out to us at team@hacktams.org.',
        INCOMPLETE_TITLE: 'You still need to complete your registration!',
        INCOMPLETE: 'Finish your registration as soon as possible. Only the first 150 registered participants are guaranteed swag. If you have any questions/concerns, or run into any errors, please reach out to us at team@hacktams.org.',
        SUBMITTED_TITLE: 'Your registration has been submitted!',
        SUBMITTED: 'Your registration should be accepted in 1-2 days. If it hasn\'t, please contact us at team@hacktams.org.',
        CLOSED_AND_INCOMPLETE_TITLE: 'Unfortunately, registration has closed.',
        CLOSED_AND_INCOMPLETE: 'If you think this is a mistake, please contact us at team@hacktams.org.',
        ADMITTED_AND_CAN_CONFIRM_TITLE: '',
        ADMITTED_AND_CANNOT_CONFIRM_TITLE: 'Your confirmation deadline of [CONFIRM_DEADLINE] has passed.',
        ADMITTED_AND_CANNOT_CONFIRM: 'Although you were accepted, you did not complete your confirmation in time.\nUnfortunately, this means that you will not be able to attend the event, as we must begin to accept other applicants on the waitlist.\nWe hope to see you again next year!',
        CONFIRMED_NOT_PAST_TITLE: 'You can edit your confirmation information until [CONFIRM_DEADLINE]',
        DECLINED: 'We\'re sorry to hear that you won\'t be able to make it to HackTAMS Fall 2020! :(\nMaybe next year! We hope you see you again soon.',
    })
    .constant('TEAM',{
        NO_TEAM_REG_CLOSED: 'Unfortunately, it\'s too late to enter the lottery with a team.\nHowever, you can still form teams on your own before or during the event!',
    });
