// State Management
export { useSessionStorage } from "usehooks-ts";
export { useLocalStorage } from "usehooks-ts";
export { useToggle } from "usehooks-ts";
export { useMap } from "usehooks-ts";

// Effects and Event Handlers
export { useCopyToClipboard } from "usehooks-ts";
export { useCountdown } from "usehooks-ts";
export { useDebounce } from "usehooks-ts";
export { useDocumentTitle } from "usehooks-ts";
export { useIsomorphicLayoutEffect } from "usehooks-ts";
export { useEffectOnce } from "usehooks-ts";
export { useElementSize } from "usehooks-ts";
export { useEventListener } from "usehooks-ts";
export { useHover } from "usehooks-ts";
export { useImageOnLoad } from "usehooks-ts";
export { useIntersectionObserver } from "usehooks-ts";
export { useInterval } from "usehooks-ts";
export { useIsFirstRender } from "usehooks-ts";
export { useOnClickOutside } from "usehooks-ts";
export { useUpdateEffect } from "usehooks-ts";

// Media and Screen
export { useMediaQuery } from "usehooks-ts";
export { useScreen } from "usehooks-ts";
export { useWindowSize } from "usehooks-ts";

// Form Handling
export { useForm, useFieldArray, useWatch } from "react-hook-form";

// Misc
export { useDarkMode } from "usehooks-ts";
export { useLockedBody } from "usehooks-ts";
export { useReadLocalStorage } from "usehooks-ts";
export { useScript } from "usehooks-ts";
export { useStep } from "usehooks-ts";

// React Query
// export {
//     useQuery,
//     useMutation,
//     useQueryClient,
//     useInfiniteQuery,
//     useIsFetching,
// } from "react-query";

export {
    useHref,
    useInRouterContext,
    useLocation,
    useNavigationType,
    useMatch,
    useNavigate,
    useOutlet,
    useOutletContext,
    useParams,
    useResolvedPath,
    useRoutes,
} from "react-router-dom";

export * from "./use-safe-context/useSafeContext";
