fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const dataArr = data.Space;
        const mainDiv = document.getElementById('main');
        const createDiv = (groupIndex, elIndex) => {
            const group = data.Space[groupIndex].Tiles
            const newDiv = document.createElement('div');
            const topInnerDiv = document.createElement('div');
            const bottomInnerDiv = document.createElement('div');
            newDiv.style.width = `${group[elIndex].Width}px`;
            newDiv.style.height = `${group[elIndex].Height}px`;
            newDiv.style.border = '1px solid black';
            newDiv.style.boxSizing = 'border-box'
            newDiv.style.marginTop = '10px';
            newDiv.style.display = 'flex';
            newDiv.style.flexDirection = 'column';

            bottomInnerDiv.style.height = '80%';
            bottomInnerDiv.style.display = 'flex';
            bottomInnerDiv.style.alignItems = 'center';
            bottomInnerDiv.style.justifyContent = 'center';
            bottomInnerDiv.style.fontWeight = '400';
            bottomInnerDiv.style.fontSize = '12px';

            topInnerDiv.textContent = `${group[elIndex].Name}`
            bottomInnerDiv.textContent = `${group[elIndex].Width} x ${group[elIndex].Height}`

            newDiv.appendChild(topInnerDiv);
            newDiv.appendChild(bottomInnerDiv);


            return newDiv;
        }

        const divContainer = document.createElement('div');
        divContainer.style.display = 'flex';
        divContainer.style.flexWrap = 'wrap';
        divContainer.style.marginTop = '10px';
        divContainer.style.width = '70%';
        divContainer.style.justifyContent = 'space-between';
        divContainer.style.padding = '20px';
        divContainer.style.borderTop = '2px solid';
        mainDiv.appendChild(divContainer);

        dataArr.map((item) => console.log(item))
        dataArr.map((item, index) => {
            if (item.Tiles.length === 4) {
                const leftMainDivGroup1 = document.createElement('div');
                leftMainDivGroup1.style.display = 'flex';
                leftMainDivGroup1.style.flexDirection = 'column';
                leftMainDivGroup1.style.fontWeight = '600';
                leftMainDivGroup1.textContent = `${item.Header}`;
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

                const divWidth200Group1 = createDiv(item.Order - 1, 0);
                const divHeight200Group1 = createDiv(item.Order - 1, 1);
                const divHeight100Group1 = createDiv(item.Order - 1, 2);
                const divHeight300Group1 = createDiv(item.Order - 1, 3);

                leftTopDivGroup1.appendChild(divWidth200Group1);
                leftBottomDivGroup1.appendChild(divHeight200Group1);
                leftBottomDivGroup1.appendChild(divHeight100Group1);
                rightDivGroup1.appendChild(divHeight300Group1);

            } else if (item.Tiles.length === 5) {
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


                const divHeight100Group2 = createDiv(item.Order - 1, 0);
                const divHeight200Group2 = createDiv(item.Order - 1, 1);
                const divHeight200Group2Order3 = createDiv(item.Order - 1, 2);
                const divHeight100Group2Order4 = createDiv(item.Order - 1, 3);
                const divHeight300Group2 = createDiv(item.Order - 1, 4);


                rightDivGroup2.appendChild(divHeight100Group2);
                rightDivGroup2.appendChild(divHeight200Group2);
                middleDivGroup2.appendChild(divHeight200Group2Order3);
                middleDivGroup2.appendChild(divHeight100Group2Order4);
                leftDivGroup2.appendChild(divHeight300Group2);
            }
        })
    })


