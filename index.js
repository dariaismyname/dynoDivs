fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const mainDiv = document.getElementById('main');

        const createDiv = (groupIndex, elIndex) => {
            const group = data.Space[groupIndex].Tiles
            const newDiv = document.createElement('div');
            newDiv.style.width = `${group[elIndex].Width}px`;
            newDiv.style.height = `${group[elIndex].Height}px`;
            newDiv.style.border = '1px solid black';
            newDiv.style.boxSizing = 'border-box'
            newDiv.style.marginTop = '10px';
            newDiv.textContent = `${group[elIndex].Name}`

            return newDiv;
        }

        const divContainer = document.createElement('div');
        divContainer.style.display = 'flex';
        divContainer.style.marginTop = '10px';
        divContainer.style.width = '70%';
        divContainer.style.justifyContent = 'space-between';
        divContainer.style.padding = '20px';
        divContainer.style.borderTop = '2px solid';
        mainDiv.appendChild(divContainer);


        // Create containers for group1
        const leftMainDivGroup1 = document.createElement('div');
        leftMainDivGroup1.style.display = 'flex';
        leftMainDivGroup1.style.flexDirection = 'column';
        leftMainDivGroup1.style.fontWeight = '600';
        leftMainDivGroup1.textContent = 'Group 1';
        divContainer.appendChild(leftMainDivGroup1);

        const leftContainerDiv = document.createElement('div');
        leftContainerDiv.style.display = 'flex';
        leftContainerDiv.style.marginTop = '15px';
        leftContainerDiv.style.flexWrap = 'wrap';
        leftContainerDiv.style.gap = '10px';
        leftMainDivGroup1.appendChild(leftContainerDiv);


        const leftDivGroup1 = document.createElement('div');
        leftDivGroup1.style.display = 'flex';
        leftDivGroup1.style.flexDirection = 'column';
        leftContainerDiv.appendChild(leftDivGroup1);

        const rightDivGroup1 = document.createElement('div');
        leftContainerDiv.appendChild(rightDivGroup1);

        const leftTopDivGroup1 = document.createElement('div');
        leftDivGroup1.appendChild(leftTopDivGroup1);

        const leftBottomDivGroup1 = document.createElement('div');
        leftBottomDivGroup1.style.display = 'flex';
        leftBottomDivGroup1.style.flexWrap = 'wrap';
        leftBottomDivGroup1.style.gap = '10px';
        leftDivGroup1.appendChild(leftBottomDivGroup1);



        // Create containers for group2
        const rightMainDivGroup2 = document.createElement('div');
        rightMainDivGroup2.style.display = 'flex';
        rightMainDivGroup2.style.flexDirection = 'column';
        rightMainDivGroup2.style.fontWeight = '600';
        rightMainDivGroup2.textContent = 'Group 2';
        divContainer.appendChild(rightMainDivGroup2);

        const rightContainerDiv = document.createElement('div');
        rightContainerDiv.style.display = 'flex';
        rightContainerDiv.style.marginTop = '15px';
        rightContainerDiv.style.flexWrap = 'wrap';
        rightContainerDiv.style.gap = '10px';
        rightMainDivGroup2.appendChild(rightContainerDiv);


        const rightDivGroup2 = document.createElement('div');
        rightDivGroup2.style.display = 'flex';
        rightDivGroup2.style.flexDirection = 'column';
        rightContainerDiv.appendChild(rightDivGroup2);

        const middleDivGroup2 = document.createElement('div');
        middleDivGroup2.style.display = 'flex';
        middleDivGroup2.style.flexDirection = 'column';
        rightContainerDiv.appendChild(middleDivGroup2);

        const leftDivGroup2 = document.createElement('div');
        rightContainerDiv.appendChild(leftDivGroup2);



        //Create elements for group 1
        const divWidth200Group1 = createDiv(0,0);
        const divHeight200Group1 = createDiv(0,1);
        const divHeight100Group1 = createDiv(0,2);
        const divHeight300Group1 = createDiv(0,3);


        // Create elements for group 2
        const divHeight100Group2 = createDiv(1,0);
        const divHeight200Group2 = createDiv(1,1);
        const divHeight200Group2Order3 = createDiv(1,2);
        const divHeight100Group2Order4 = createDiv(1,3);
        const divHeight300Group2 = createDiv(1,4);


        // Add children for group 1
        leftTopDivGroup1.appendChild(divWidth200Group1);
        leftBottomDivGroup1.appendChild(divHeight200Group1);
        leftBottomDivGroup1.appendChild(divHeight100Group1);
        rightDivGroup1.appendChild(divHeight300Group1);

        // Add children for group 2
        rightDivGroup2.appendChild(divHeight100Group2);
        rightDivGroup2.appendChild(divHeight200Group2);
        middleDivGroup2.appendChild(divHeight200Group2Order3);
        middleDivGroup2.appendChild(divHeight100Group2Order4);
        leftDivGroup2.appendChild(divHeight300Group2);


        // const h4 = document.createElement('h4')
    })


