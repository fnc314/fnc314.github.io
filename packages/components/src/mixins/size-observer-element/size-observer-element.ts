import type { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";

export type Constructor<T> = new (...args: any[]) => T;

export const SizeObserverElement = <T extends Constructor<UIAwareElement>>(Base: T): T => {
  return class SizeObserverElementClass extends Base {
    protected intersectionObserver?: IntersectionObserver;
    protected resizeObserver?: ResizeObserver;

    override connectedCallback() {
      super.connectedCallback?.();
      this.initObservers();
    }

    override disconnectedCallback() {
      this.intersectionObserver?.disconnect();
      this.resizeObserver?.disconnect();
      super.disconnectedCallback?.();
    }

    private initObservers() {
      // Intersection Observer setup
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is in view");
          }
        });
      });
      this.intersectionObserver.observe(this);

      // Resize Observer setup
      this.resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          console.log("New dimensions:", entry.contentRect.width, entry.contentRect.height);
        }
      });
      this.resizeObserver.observe(this);
    }
  };
};
