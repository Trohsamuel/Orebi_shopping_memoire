*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${LOCALHOST_URL}    http://localhost:300
${BROWSER_OPTIONS}    --user-data-dir=/tmp/chrome-profile  # Fonctionnera avec SeleniumLibrary

*** Test Cases ***
Test Home Page
    Open Browser    ${LOCALHOST_URL}    Chrome    options=${BROWSER_OPTIONS}
    Title Should Contain    Home

Test About Page
    Go To    ${LOCALHOST_URL}/about
    Title Should Contain    About

Test Contact Page
    Go To    ${LOCALHOST_URL}/contact
    Title Should Contain    Contact

Test Shop Page
    Go To    ${LOCALHOST_URL}/shop
    Title Should Contain    Shop

*** Keywords ***
Close All Browsers
    Close All Browsers
