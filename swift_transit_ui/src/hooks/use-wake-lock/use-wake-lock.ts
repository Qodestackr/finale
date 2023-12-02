/**Only (active) documents can acquire the screen wake lock.


Essential to keep screen on on map navigation, scanning QR codes and gesture controls rather than
tactile input(the default way to keep a screen awake)

The sentinel is attached to the underlying system wake lock. It can be released by the 
system, if the battery power is too low or the document is not active or visible. 
It can also be released manually via the WakeLockSentinel.release() method. 

PRACTICE+: Store a ref to the sentinel object to control release later and also to reacquire the lock if need be.
*/

export function isWakeLockSupport() {
    let isSupported;
    if ("wakeLock" in navigator) {
        isSupported = true;
        return isSupported;
        //   statusElem.textContent = "Screen Wake Lock API supported!";
    } else {
        //   wakeButton.disabled = true;
        //   statusElem.textContent = "Wake lock is not supported by this browser.";
    }
}

export async function useWakeLock() {
    // Create a reference for the Wake Lock.
    let wakeLock /**: WakeLock */ = null;

    //   WakeLockSentinelEventMap on TS

    // create an async function to request a wake lock
    try {
        wakeLock = await navigator.wakeLock.request("screen");
        // statusElem.textContent = "Wake Lock is active!";
        return wakeLock;
    } catch (err) {
        // The Wake Lock request has failed - usually system related, such as battery.
        // statusElem.textContent = `${err.name}, ${err.message}`;
    }
}

// wakeLock.addEventListener("release", () => {
//   // the wake lock has been released
//   statusElem.textContent = "Wake Lock has been released";
// });

// TODO
// use effect cleanups on remove event listener or TS class

// document.addEventListener("visibilitychange", async () => {
//   if (wakeLock !== null && document.visibilityState === "visible") {
//     wakeLock = await navigator.wakeLock.request("screen");
//   }
// });

/**Release the screen wake lock when user ends activity that required always-on screen. 
 * For example, a ticketing app which uses QR codes to transmit ticket information, might 
 * acquire screen wake lock when the 
 * QR code is displayed (so that code is successfully scanned) but release afterwards. 
 * A presentation app might hold the lock only while a presentation is active, but not when presentation is being edited.
If your app is performing long-running downloads, consider using background fetch.
If your app is synchronizing data from a remote server, consider using background sync.
Only active documents can acquire screen wake locks and previously acquired locks are 
automatically released when document becomes inactive. Therefore make sure to re-acquire 
screen wake lock if necessary when document becomes active (listen for visibilitychange event). 
*/
