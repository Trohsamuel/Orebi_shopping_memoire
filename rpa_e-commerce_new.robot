*** Settings ***
Library    SeleniumLibrary
Library    OperatingSystem

*** Variables ***
${LOCAL_URL}    http://localhost:3000
${BROWSER}      chrome

*** Test Cases ***
Open Local App
    [Documentation]    Ce test ouvre l'application locale dans un navigateur Chrome.
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Call Method    ${chrome_options}    add_argument    --disable-dev-shm-usage
    Call Method    ${chrome_options}    add_argument    --headless
    Open Browser    ${LOCAL_URL}    ${BROWSER}    options=${chrome_options}
    Maximize Browser Window
    Sleep    5
    Capture Page Screenshot
    Close Browser
