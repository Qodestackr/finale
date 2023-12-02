// Mouse Lock/  Pointer Lock API
/**access to raw mouse movement, locks the target of mouse events to a single element,
 * eliminates limits on how far mouse movement
 * can go in a single direction, and removes the cursor from view. */

/**Moreso, API is useful for any applications that require significant mouse input to control movements,
 * rotate objects, and change entries, E.g allowing users to control the viewing angle by moving the mouse
 * around without any button clicking. The buttons are then freed up for other actions. Other examples
 * include apps for viewing maps or satellite imagery.
 */

// Pointer lock lets you access mouse events even when the cursor goes past the boundary
// /of the browser or screen. For example, your users can continue to rotate or manipulate a
// 3D model by moving the mouse without end. Without Pointer lock, the rotation or manipulation
// stops the moment the pointer reaches the edge of the browser or screen. Game players can now
// click buttons and swipe the mouse cursor back and forth without worrying about leaving the game
// play area and accidentally clicking another application that would take mouse focus away from the game.

//Pointer lock is related to mouse capture. Mouse capture provides continued delivery of events
// to a target element while a mouse is being dragged, but it stops when the mouse button is released.
// Pointer lock is different from mouse capture in the following ways:

// It is persistent: Pointer lock does not release the mouse until an explicit API call is made or the user uses a specific
// release gesture.
// It is not limited by browser or screen boundaries.
// It continues to send events regardless of mouse button state.
// It hides the cursor.

export async function useMousePointerLock(domNode: HTMLElement) {
    domNode?.requestPointerLock();
}
