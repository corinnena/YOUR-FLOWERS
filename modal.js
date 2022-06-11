(function() {
    'use strict';
    var content = document.querySelector(
        '.mod-content');
    var button = document.querySelector('.modal-btn');
    button.addEventListener('click', function(e) {
        e.preventDefault();
        Mzp.Modal.createModal(e.target, content, {
            title: 'Example headline with 35 characters',
            className: 'mzp-has-media',
            closeText: 'Close modal',
            onCreate: function() {
                console.log('Modal opened');
            },
            onDestroy: function() {
                console.log('Modal closed');
            }
        });
    }, false);
})();