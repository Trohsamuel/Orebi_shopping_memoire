*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${LOCALHOST_URL}    http://localhost:3000
${UNIQUE_PROFILE_DIR}    ${TEMPDIR}/chrome-profile-${SUITE NAME} # Crée un profil unique pour éviter les conflits

*** Test Cases ***
Test Minimal
    Open Browser    ${LOCALHOST_URL}    Chrome    chrome_options={"args": ["--user-data-dir=${UNIQUE_PROFILE_DIR}"]}
#    Title Should Contain    Home
    Close Browser

