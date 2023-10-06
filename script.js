const pageTitles = {
    'home': 'SCHOOLAURA PROVIDE SMART STUDY AND SCHOOL MANAGEMENT SOLUTION',
    'page1': 'Page 1 - SCHOOLAURA',
    'page2': 'Page 2 - SCHOOLAURA',
    'page3': 'Page 3 - SCHOOLAURA',
   
};

// Function to set the dynamic page title
function setPageTitle(page) {
    const dynamicTitle = document.getElementById('dynamicTitle');
    if (pageTitles[page]) {
        dynamicTitle.innerText = pageTitles[page];
        console.log(`Title updated to: ${dynamicTitle.innerText}`)
    }
}