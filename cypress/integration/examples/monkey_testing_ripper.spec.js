describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
        //randomClick(10);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
                console.log('000');
            }
            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }   
}

function randomEvent(monkeysLeft1) {
    
    var monkeysLeft1 = monkeysLeft1;
    if(monkeysLeft1 > 0) {
        var randomEventSelect = Math.floor(Math.random() * 4);
        console.log(randomEventSelect);
        casesEvent(randomEventSelect, monkeysLeft1);
        //casesEvent(2, monkeysLeft1);
    }           
}

function casesEvent(numberCase, monkeysLeft1) {
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    switch(numberCase) {
        case 0:
            // Hacer click en un link al azar
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                }
            }); 
            //console.log('000');
            monkeysLeft1 = monkeysLeft1 - 1;
            cy.wait(1000);
            randomEvent(monkeysLeft1);
        break;
        case 1:
            // Llenar un campo de texto al azar
            cy.get('input').then($input => {
                var randomInput = $input.get(getRandomInt(0, $input.length));
                console.log($input.length);
                if(!Cypress.dom.isHidden(randomInput)) {
                    cy.get(randomInput).type('testing');
                }
            }); 
            console.log('111');
            monkeysLeft1 = monkeysLeft1 - 1;
            randomEvent(monkeysLeft1);
        break;
        case 2:
            // Seleccionar un combo al azar
            cy.get('select>option').then($select => {
                var randomSelect = $select.get(getRandomInt(0, $select.length));
                console.log(randomSelect);
                //if(!Cypress.dom.isHidden(randomSelect)) {
                //    cy.get('option').then($option => {
                //    var ramdomOption = $option.get(getRandomInt(0, $option.length));
                //    console.log($option.length);
                //    }
                
                //cy.get(randomSelect).select();
                cy.get('select').eq(0).select(randomSelect.value);
                //console.log(algo.length);
                  //  .select($select);
                //}
            }); 
            console.log('222');
            monkeysLeft1 = monkeysLeft1 - 1;
            cy.wait(1000);
            randomEvent(monkeysLeft1);
        break;
        case 3:
            cy.get('button').then(($btn) => {
                var randomButton = $btn.get(getRandomInt(0, $btn.length));
                //console.log($btn.length); 
                if(!Cypress.dom.isHidden(randomButton)) {
                  cy.wrap(randomButton).click({force: true});
                }
            });
            //console.log('333'); 
            monkeysLeft1 = monkeysLeft1 - 1;
            cy.wait(1000);
            randomEvent(monkeysLeft1);
        break;
    }    
}