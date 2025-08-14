browser.contextMenus.create({
  id: "search-gtacars",
  title: "Search on GTACars",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  // Check if the clicked menu item is our custom one
  if (info.menuItemId === "search-gtacars") {
    // Get the selected text from the 'info' object
    const selectedText = info.selectionText;

    // URL-encode the selected text to make it safe for a URL
    const encodedText = encodeURIComponent(selectedText);

    // Construct the full GTACars search URL
    const searchUrl = `https://gtacars.net/gta5?q=${encodedText}`;

    // Create a new tab with the search URL
    browser.tabs.create({
      url: searchUrl
    });
  }
});