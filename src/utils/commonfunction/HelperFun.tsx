export const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
};

export const capitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const navigateTo = (path : string) => {
    window.history.pushState({}, '', path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  