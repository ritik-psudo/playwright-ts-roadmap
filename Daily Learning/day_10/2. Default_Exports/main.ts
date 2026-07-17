// no curly braces required while importing default exports
//you can name the export function anything you want while importing it. It does not have to be the same as the function name in the file where it is exported from. But is is a good practice to mention the exact same name.
import launchBrowser from './browserConfig';

launchBrowser('Chromeium');
launchBrowser('Firefox');
launchBrowser('Webkit');