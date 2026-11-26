/**
 * @summary Global declaration for gtag
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventCategory =
  | "navigation"
  | "outbound"
  | "contact"
  | "resume"
  | "social";

export interface AnalyticsEventParams {
  category: AnalyticsEventCategory;
  label?: string;
  destination?: string;
  value?: string | number;
  [key: string]: unknown;
}

/**
 * Service to manage Google Analytics 4 event tracking with safe dev dummying.
 */
export class AnalyticsService {
  public static get measurementId(): string {
    return (typeof import.meta !== "undefined" && import.meta.env?.VITE_GA_MEASUREMENT_ID) || "";
  }

  public static isEnabled(): boolean {
    return Boolean(this.measurementId) && typeof window !== "undefined";
  }

  public static trackEvent(eventName: string, params: AnalyticsEventParams): void {
    if (!this.isEnabled() || typeof window.gtag !== "function") {
      if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
        console.debug(`[Analytics (DEV NO-OP)] ${eventName}:`, params);
      }
      return;
    }
    window.gtag("event", eventName, {
      event_category: params.category,
      event_label: params.label,
      destination_url: params.destination,
      ...params,
    });
  }

  public static trackOutbound(
    destination: string,
    label: string,
    category: AnalyticsEventCategory = "outbound",
    extraParams?: Record<string, unknown>
  ): void {
    this.trackEvent("click_outbound", {
      category,
      label,
      destination,
      ...extraParams,
    });
  }

  public static trackContact(type: "phone" | "email", destination: string): void {
    this.trackEvent("click_contact", {
      category: "contact",
      label: type,
      destination,
    });
  }

  public static trackResume(format: "google_doc" | "pdf", destination: string): void {
    this.trackEvent("view_resume", {
      category: "resume",
      label: format,
      destination,
    });
  }
}

export const analyticsService = AnalyticsService;
