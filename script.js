let formCount = 1;

function addForm(index) {
    if (formCount >= 5) {
        alert('Maximum number of forms is 5');
        return;
    }

    formCount++;
    const formContainer = document.getElementById('formContainer');
    const newForm = document.createElement('div');
    newForm.className = 'form-row';
    newForm.id = 'form' + formCount;

    const newFormGroup = document.createElement('div');
    newFormGroup.className = 'form-group col-md-12';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'form-control';
    newInput.id = 'input' + formCount;
    newInput.placeholder = 'Firstname Lastname' + ' (' + formCount + ')';

    const newInputGroup = document.createElement('div');
    newInputGroup.className = 'input-group';

    const newButton = document.createElement('button');
    
    if (formCount < 5) {
        newButton.className = 'btn btn-success ml-2';
        newButton.type = 'button';
        newButton.onclick = function() {
            addForm(formCount + 1);
        };

        const newIcon = document.createElement('span');
        newIcon.className = 'plus';
        newIcon.innerHTML = 'Add';

        newButton.appendChild(newIcon);
    } else {
        // If the maximum number of forms is reached
        newButton.className = 'btn btn-danger ml-2';
        newButton.type = 'button';
        newButton.disabled = true;
        newButton.innerHTML = 'Max';
    }

    newInputGroup.appendChild(newInput);
    newFormGroup.appendChild(newInputGroup);
    newForm.appendChild(newFormGroup);
    formContainer.appendChild(newForm);
}

function submit() {
    const urls = [];
    for (let i = 1; i <= formCount; i++) {
        const inputId = 'input' + i;
        const inputElement = document.getElementById(inputId);
        const inputValue = inputElement.value.trim();

        if (inputValue !== '') {
            const url = `https://fire.san-andreas.net/search.php?keywords=${inputValue}&terms=all&author=&fid%5B%5D=1061&sc=1&sf=titleonly&sr=posts&sk=t&sd=d&st=0&ch=300&t=0&submit=Search`;
            urls.push(url);
        }
    }

    if (urls.length > 0) {
        urls.forEach(url => {
            window.open(url, '_blank');
        });

        for (let i = 1; i <= formCount; i++) {
            const inputId = 'input' + i;
            document.getElementById(inputId).value = '';
        }
    } else {
        alert('Please enter at least one name!');
    }
}