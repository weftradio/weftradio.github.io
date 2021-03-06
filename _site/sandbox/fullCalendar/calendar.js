var options = {
    googleCalendarApiKey: 'AIzaSyBxOpohnRm5SJOLdw7r_PeDcTfUafdlTMc',
    events: {
        googleCalendarId: 'weftwebteam@gmail.com'
    },
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'basicDay,agendaWeek'
    },
    eventBackgroundColor: 'transparent',
    eventBorderColor: '#08c',
    eventTextColor: 'black',
    height: 'auto',
    defaultView: 'agendaWeek',
    allDaySlot: false,
};

var $fc = $("#calendar").fullCalendar(options);

function recreateFC(screenWidth) {
    if (screenWidth < 700) {
        options.header = {
            left: 'prev,next today',
            center: '',
            right: 'title'
        },
        options.defaultView = 'basicDay';
    } else {
        options.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'basicDay,agendaWeek'
        },
        options.defaultView = 'agendaWeek';
    }
    $fc.fullCalendar('destroy');
    $fc.fullCalendar(options);
}

$(window).resize(function () {
    recreateFC($(window).width());
});

recreateFC($(window).width());