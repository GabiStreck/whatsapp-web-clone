export const useRelativeFromatOfDay = (timestamp) => {
    if (!timestamp) return ""
    const formatter = new Intl.RelativeTimeFormat("en-US", {
        numeric: "auto"
    });
    const diff = Math.floor(
        (new Date() - new Date(timestamp)) / (1000 * 60 * 60 * 24)
    ) || 0;
    return formatter?.format(diff, "day");
};