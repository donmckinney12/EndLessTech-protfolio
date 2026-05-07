"use client";

/**
 * Institutional Telemetry Utility
 * Interfaces with New Relic Browser Agent to record high-fidelity interaction events.
 */

declare global {
  interface Window {
    NREUM?: {
      addPageAction: (name: string, attributes: Record<string, any>) => void;
    };
  }
}

export const trackEvent = (eventName: string, attributes: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.NREUM) {
    try {
      window.NREUM.addPageAction(eventName, {
        ...attributes,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
      });
      console.log(`[Telemetry] Tracked: ${eventName}`, attributes);
    } catch (error) {
      console.warn(`[Telemetry] Failed to track event: ${eventName}`, error);
    }
  }
};

export const telemetry = {
  trackEvent,
  trackSecurityAudit: () => trackEvent("SECURITY_AUDIT_INITIATED"),
  trackAssetSync: (assetName: string) => trackEvent("ASSET_SYNC_VERIFIED", { assetName }),
  trackIntelligenceView: () => trackEvent("INTELLIGENCE_DATA_ACCESSED"),
  trackProtocolInitiation: (protocolName: string) => trackEvent("PROTOCOL_INITIATED", { protocolName }),
};
