*** Settings ***
Library    RPA.Browser.Selenium

*** Variables ***
${LOCALHOST_URL}    http://localhost:3000

*** Test Cases ***
Test Home Page
    Open Browser    ${LOCALHOST_URL}    Chrome
    Title Should Be    Home Page

Test About Page
    Go To    ${LOCALHOST_URL}/about
    Title Should Contain    About

Test Contact Page
    Go To    ${LOCALHOST_URL}/contact
    Title Should Contain    Contact

Test Shop Page
    Go To    ${LOCALHOST_URL}/shop
    Title Should Contain    Shop

Close Browser
