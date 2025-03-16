async function unstarAll() {
    const unstarButtons = document.querySelectorAll('[aria-label="Unstar this repository"]');

    for (const btn of unstarButtons) {
        btn.click();

        await new Promise(resolve => setTimeout(resolve, 500)); // ? Waiting for the confirmation modal

        const confirmButton = document.querySelector('form.js-social-confirmation-form button.btn-danger');

        if (confirmButton) {
            confirmButton.click();

            await new Promise(resolve => setTimeout(resolve, 500)); // ? Waiting before next run
        }
    }
}

unstarAll();
