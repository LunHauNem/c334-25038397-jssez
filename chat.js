const chatModuleUrl = 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

import(chatModuleUrl)
  .then(({ createChat }) => {
    createChat({
      webhookUrl: 'https://agenticflows.tokencraze.org/webhook/43fd0a03-39a9-496d-8b75-76a2e66aa2f6/chat',
      mode: 'window',
      loadPreviousSession: false,
      i18n: {
        en: {
          title: 'JS-SEZ advisor',
          subtitle: 'A guide to the SMF JS-SEZ Playbook',
          getStarted: 'New conversation',
          inputPlaceholder: 'Ask about the JS-SEZ...',
        },
      },
      initialMessages: [
        'Hello, I am the JS-SEZ advisor.',
        'Ask a question and request the playbook page reference.',
      ],
    });
    const toggle = document.querySelector('.chat-window-toggle');
    if (!toggle) {
      throw new Error('The chat window toggle was not rendered.');
    }

    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.setAttribute('aria-label', 'Toggle the JS-SEZ advisor chat');
    toggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle.click();
      }
    });
  })
  .catch((error) => {
    console.error('Unable to load the JS-SEZ advisor chat.', error);
    const status = document.querySelector('[data-chat-status]');
    if (status) {
      status.hidden = false;
    }
  });
