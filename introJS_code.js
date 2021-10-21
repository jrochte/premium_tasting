function help_click() {
    tog_active();
    setup_introJS();
}

function setup_introJS() {
    var theintro = introJs();
    var theoptions = {
        steps: [{
                element: "#step1",
                title: "Navigation",
                intro: "Click the top bar for the dropdown Menu.",
                position: "bottom"
            }, {
                element: "#step2",
                title: "New QR Code",
                intro: "Upload a MS Forms QR code image."
            }, {
                element: "#step3",
                title: "Hover",
                intro: "Then you can hover over this picture to enlarge the QR code!"
            }, {
                element: "#step4",
                title: "Defaults",
                intro: "Input default values here.<br>Speaking Volume is set when the timer is inactive.<br>Tasting Volume is set when the timer is active."
            }, {
                element: "#step5",
                title: "Youtube!",
                intro: "Input a Youtube video ID here to play that video.<br>(http://youtu.be/<mark>vADUL4YhirE</mark>)<br><br><a href=\"https://www.youtube.com/c/RelaxCafeMusic/videos\" target=\"_blank\">Relaxing Cafe Music Channel</a>"
            }, {
                element: "#step_navDownload",
                title: "Save Button",
                intro: "This will save and load your preferences."
            },
            {
                element: "#step_navHelp",
                title: "Help Button",
                intro: "This will show this tutorial again."
            }, {
                element: "#step_timerReset",
                title: "Timer Minute Override",
                intro: "This will override the default timer value."
            }, {
                element: "#step_btnReset",
                title: "Timer Reset",
                intro: "This will reset the timer to either the value to the right, or the default value."
            }, {
                element: "#step_btnControl",
                title: "Timer Start/Stop",
                intro: "This will Start and Stop the timer.<br>The video will play at the Tasting Volume when running and the Speaking Volume when stopped."
            }, {
                title: "Thank you!",
                intro: "If you have any questions, please ask Jake Rochte!"
            }
        ]
    };
    theintro.setOptions(theoptions);

    theintro.onbeforechange(function () {
        // console.log(this._currentStep);
        if (theintro._currentStep === 0 || theintro._currentStep === 7) {
            tog_active();
        }
    });
    theintro.oncomplete(function () {
        // tog_active();
        localStorage.setItem("show_tutorial", "no")
    });

    theintro.start();
}