"use client";

import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";

/**
 * ClientTopProgressBar
 * A minimal progress indicator for page transitions and fetch requests.
 * Automatically hooks into Next.js router and fetch API.
 */
export default function ClientTopProgressBar() {
	useEffect(() => {
		let activeRequests = 0;
		let timer = null;
		let state = "idle";

		const startProgress = () => {
			if (state === "loading") return;
			state = "loading";
			timer = setTimeout(() => NProgress.start(), 100);
		};

		const stopProgress = () => {
			if (activeRequests > 0) return;
			state = "idle";
			clearTimeout(timer);
			NProgress.done();
		};

		const handleRouteStart = () => startProgress();
		const handleRouteDone = () => stopProgress();

		Router.events.on("routeChangeStart", handleRouteStart);
		Router.events.on("routeChangeComplete", handleRouteDone);
		Router.events.on("routeChangeError", handleRouteDone);

		// Wrap global fetch to track network activity
		const originalFetch = window.fetch;
		window.fetch = async (...args) => {
			if (activeRequests === 0) startProgress();
			activeRequests++;

			try {
				return await originalFetch(...args);
			} catch (error) {
				throw error;
			} finally {
				activeRequests--;
				if (activeRequests === 0) stopProgress();
			}
		};

		// Cleanup listeners and restore fetch
		return () => {
			Router.events.off("routeChangeStart", handleRouteStart);
			Router.events.off("routeChangeComplete", handleRouteDone);
			Router.events.off("routeChangeError", handleRouteDone);
			window.fetch = originalFetch;
		};
	}, []);

	return null;
}
