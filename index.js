import "@material/web";
import "./partials/info/info-partial";

/**
 * Determines which {@link MdTabs} is selected
 * @param tabs The {@link MdTabs} from {@link document.getElementById}
 * @return The {@link MdTab} selected *or* {@link nul}
 */
function getVisibleTab(tabs) {
  const activeTab = tabs.activeTab?.getAttribute("aria-controls");
  return tabs.getRootNode().querySelector(`#${activeTab}`);
}