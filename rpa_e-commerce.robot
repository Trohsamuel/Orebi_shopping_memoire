*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}       chrome
${URL}          http://localhost:3000

*** Test Cases ***
Test Home Page
    [Documentation]  Vérifie si la page d'accueil du site e-commerce s'affiche correctement.
    Open Browser With Options    ${URL}    
    Wait Until Page Contains    Bienvenue sur notre boutique en ligne    timeout=10s
    Capture Page Screenshot
    Close Browser

Test About Page
    [Documentation]  Vérifie si la page "À propos" s'affiche correctement.
    Open Browser With Options    ${URL}/about    
    Wait Until Page Contains    Qui sommes-nous    timeout=10s
    Capture Page Screenshot
    Close Browser

Test Contact Page
    [Documentation]  Vérifie si la page de contact est accessible.
    Open Browser With Options    ${URL}/contact    
    Wait Until Page Contains    Contactez-nous    timeout=10s
    Capture Page Screenshot
    Close Browser

Test Shop Page
    [Documentation]  Vérifie si la page boutique fonctionne bien.
    Open Browser With Options    ${URL}/shop    
    Wait Until Page Contains    Nos produits    timeout=10s
    Capture Page Screenshot
    Close Browser

Close Browser
    [Documentation]  Assure que le navigateur est bien fermé après les tests.
    Close Browser

*** Keywords ***
Open Browser With Options
    [Arguments]    ${url}
    ${options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys
    Call Method    ${options}    add_argument    --no-sandbox
    Call Method    ${options}    add_argument    --disable-dev-shm-usage
    Call Method    ${options}    add_argument    --disable-gpu
    Call Method    ${options}    add_argument    --remote-debugging-port=9222
    Open Browser    ${url}    ${BROWSER}    options=${options}
    Maximize Browser Window
