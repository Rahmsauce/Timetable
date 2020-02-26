var translator = {
    translate: function(key) {
        var translation = translator.languages[config.data.language][key];
        return translation;
    },

    translate_ui: function() {
        document.getElementsByTagName("html")[0].setAttribute("lang", config.data.language);

        var elements_to_translate = document.querySelectorAll("[data-translator-key]");

        for (element of elements_to_translate) {
            element.innerText = translator.translate(element.getAttribute("data-translator-key"));
        }
    },

    languages: {
        en: {
            "timetable": "Timetable",
            "settings": "Settings",
            "language: ": "Language:",
            "dark_mode: ": "Dark mode:",
            "save": "Save",
            "cancel": "Cancel",
            "edit_schedule": "Edit schedule",
            "edit_period": "Edit period",
            "application": "Application",
            "backup": "Backup",
            "restore": "Restore",
            "reset": "Reset",
            "subject:": "Subject:",
            "room:": "Room:",
            "colors": "Colors",
            "periods": "Periods",
            "period": "Period",
            "start:": "Start:",
            "end:": "End:",
            "period": "Period",
            "add": "Add",
            "data_saved": "Your application data was successfully saved.",
            "reset_confirm": "Are you sure to reset all data? If you haven't made a backup, all application data will be lost forever."
        },

        de: {
            "timetable": "Stundenplan",
            "settings": "Einstellungen",
            "language: ": "Sprache:",
            "dark_mode: ": "Dark mode:",
            "save": "Speichern",
            "cancel": "Abbrechen",
            "edit_schedule": "Stundenplan bearbeiten",
            "edit_period": "Stunde bearbeiten",
            "application": "Anwendung",
            "backup": "Sichern",
            "restore": "Wiederherstellen",
            "reset": "Zurücksetzen",
            "subject:": "Fach:",
            "room:": "Raum:",
            "colors": "Farben",
            "periods": "Zeiten",
            "period": "Stunde",
            "start:": "Anfang:",
            "end:": "Ende:",
            "period": "Stunde",
            "add": "Hinzufügen",
            "data_saved": "Ihre Anwendungsdaten wurden erfolgreich gespeichert.",
            "reset_confirm": "Sind Sie sich sicher, dass sie alle Anwendungsdaten zurücksetzen wollen? Wenn Sie kein Backup gemacht haben, gehen dadurch alle Anwendungsdaten für immer verloren."
        }
    }
};
