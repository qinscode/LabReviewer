// Import Tauri clipboard API
import { writeText } from '@tauri-apps/api/clipboard';

// This function will be exposed to the global window object
window.copyToClipboard = async function(text) {
  try {
    await writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
};

console.log('Tauri clipboard integration loaded'); 