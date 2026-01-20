document.addEventListener('DOMContentLoaded', () => {
    const btnExport = document.getElementById('btn-export');
    const btnImportTrigger = document.getElementById('btn-import-trigger');
    const fileInput = document.getElementById('file-import');
    const statusMsg = document.getElementById('status-msg');

    // EXPORT LOGIC
    btnExport.addEventListener('click', async () => {
        try {
            statusMsg.textContent = "Gathering...";
            
            // Get tabs only from the current window
            const tabs = await chrome.tabs.query({ currentWindow: true });
            
            // Map to a clean object, stripping unnecessary Chrome metadata
            const exportData = tabs.map(tab => ({
                title: tab.title,
                url: tab.url,
                pinned: tab.pinned
            }));

            // Create JSON blob
            const jsonStr = JSON.stringify(exportData, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });

            // Generate filename with Local Time
            const now = new Date();
            const YYYY = now.getFullYear();
            const MM = String(now.getMonth() + 1).padStart(2, '0');
            const DD = String(now.getDate()).padStart(2, '0');
            const HH = String(now.getHours()).padStart(2, '0');
            const mm = String(now.getMinutes()).padStart(2, '0');
            const ss = String(now.getSeconds()).padStart(2, '0');            
            const timestamp = `${YYYY}-${MM}-${DD}-${HH}_${mm}_${ss}`;
            const filename = `tabula-rasa-${timestamp}.json`;

            // Download trigger via anchor tag hack to avoid 'downloads' permission
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            
            // Cleanup
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            statusMsg.textContent = `${tabs.length} exported`;

        } catch (err) {
            console.error(err);
            statusMsg.textContent = "Error";
        }
    });

    // IMPORT LOGIC - TRIGGER
    btnImportTrigger.addEventListener('click', () => {
        fileInput.click();
    });

    // IMPORT LOGIC - FILE READ
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        
        reader.onload = (event) => {
            try {
                const importedTabs = JSON.parse(event.target.result);
                
                if (!Array.isArray(importedTabs)) {
                    throw new Error("Invalid JSON format");
                }

                statusMsg.textContent = `Restoring ${importedTabs.length}...`;

                importedTabs.forEach(tabData => {
                    chrome.tabs.create({
                        url: tabData.url,
                        active: false, // Load in background to save sanity
                        pinned: tabData.pinned || false
                    });
                });

                statusMsg.textContent = "Done";

            } catch (err) {
                console.error(err);
                statusMsg.textContent = "Corrupt File";
            }
        };

        reader.readAsText(file);

        // Reset input so same file can be selected again if needed
        fileInput.value = '';
    });
});
