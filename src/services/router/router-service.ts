export interface RouterService extends EventTarget {
  thing(): Promise<void>;
}

class RouterServiceImpl extends EventTarget implements RouterService {
  constructor() {
    super();
    window.addEventListener("hashchange", (ev: HashChangeEvent) =>
      this.dispatchEvent(
        new CustomEvent("router.change", {
          bubbles: true,
          composed: true,
          detail: {
            newUrl: ev.newURL,
            oldUrl: ev.oldURL,
          },
        }),
      ),
    );
    window.addEventListener("popstate", (ev: PopStateEvent) => {
      this.dispatchEvent(
        new CustomEvent("router.back", {
          bubbles: true,
          composed: true,
          detail: {
            state: ev.state as unknown,
          },
        }),
      );
    });
  }

  thing(): Promise<void> {
    return Promise.resolve();
  }
}

export const routerService = new RouterServiceImpl();

export type RouterChange = CustomEvent<{ newUrl: string; oldUrl: string } | { state: unknown }>;

export type RouterReverse = CustomEvent<{ state: unknown }>;

declare global {
  interface GlobalEventHandlersEventMap {
    "router.change": RouterChange;

    "router.back": RouterReverse;
  }
}
