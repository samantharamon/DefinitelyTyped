//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";
import { Types } from "./types";

/**
 * Namespace: browser.captivePortal
 */
export namespace CaptivePortal {
    interface OnStateChangedDetailsType {
        /**
         * The current captive portal state.
         */
        state: OnStateChangedDetailsTypeStateEnum;
    }

    type OnConnectivityAvailableStatusEnum = "captive" | "clear";

    /**
     * The current captive portal state.
     */
    type OnStateChangedDetailsTypeStateEnum = "unknown" | "not_captive" | "unlocked_portal" | "locked_portal";

    interface Static {
        /**
         * Returns the current portal state, one of `unknown`, `not_captive`, `unlocked_portal`, `locked_portal`.
         */
        getState(): Promise<"unknown" | "not_captive" | "unlocked_portal" | "locked_portal">;

        /**
         * Returns the time difference between NOW and the last time a request was completed in milliseconds.
         */
        getLastChecked(): Promise<number>;

        /**
         * Fired when the captive portal state changes.
         */
        onStateChanged: Events.Event<(details: OnStateChangedDetailsType) => void>;

        /**
         * This notification will be emitted when the captive portal service has determined that we can connect to the internet.
         * The service will pass either `captive` if there is an unlocked captive portal present,
         * or `clear` if no captive portal was detected.
         */
        onConnectivityAvailable: Events.Event<(status: OnConnectivityAvailableStatusEnum) => void>;

        /**
         * Return the canonical captive-portal detection URL. Read-only.
         */
        canonicalURL: Types.Setting;
    }
}
