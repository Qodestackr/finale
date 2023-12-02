export { };

// API with two methods. navigator.
// The API has just two methods. The navigator.canShare() method may be used to
// first validate whether some data is "shareable", prior to passing it to navigator.share()
// for sending.

/**navigator.canShare()
Returns a boolean indicating whether the specified data is shareable.

navigator.share()
Returns a Promise that resolves if the passed data was successfully sent to a share target. 
This method must be called on a button click or other 
user activation (requires transient activation). */

/**const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
 */
