export const LANDSCAPE_PRIMARY_ORIENTATION = "landscape-primary"; // DEFAULT 
export const LANDSCAPE_SECONDARY_ORIENTATION = "landscape-secondary"; // UPSIDE DOWN
export const PORTRAIT_PRIMARY_ORIENTATION = "portrait-secondary"; // rotate to landscape...
export const PORTRAIT_SECONDARY_ORIENTATION = "portrait-primary";
export const ORIENTATION_NOT_SUPPORTED = 'ORIENTATION API NOT SUPPORTED'

export function useScreenOrientation(/**screenOptions: Pick<ScreenOrientation, 'type'> */) {
    switch (screen.orientation.type) {
        case "landscape-primary":
            return LANDSCAPE_PRIMARY_ORIENTATION

        case "landscape-secondary":
            return LANDSCAPE_SECONDARY_ORIENTATION

        case "portrait-primary":
            //MSG ::You should rotate your device to landscape
            return PORTRAIT_PRIMARY_ORIENTATION
            
        case "portrait-secondary":
            return PORTRAIT_SECONDARY_ORIENTATION

        default:
            return ORIENTATION_NOT_SUPPORTED
    }
}
