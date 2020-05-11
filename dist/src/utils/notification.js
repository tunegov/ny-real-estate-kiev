"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_notifications_component_1 = require("react-notifications-component");
exports.show = (title, message, type = 'success') => {
    react_notifications_component_1.store.addNotification({
        title,
        message,
        type,
        insert: 'bottom',
        container: 'bottom-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
            duration: 3000,
            onScreen: true
        },
        slidingExit: {
            duration: 800,
            timingFunction: 'ease-out',
            delay: 0
        }
    });
};
