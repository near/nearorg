import { useSocialDb } from './useSocialDb';

export function useStatistics() {
  const { data: components } = useSocialDb('keys', ['*/widget/*']);
  const { data: apps } = useSocialDb('keys', ['*/widget/*/metadata/tags/app']);

  const statistics = {
    totalApps: 0,
    totalComponents: 0,
    totalDevelopers: 0,
  };

  if (components) {
    Object.keys(components).forEach((accountId) => {
      statistics.totalDevelopers++;
      const component = components[accountId];
      statistics.totalComponents += Object.keys(component.widget).length;
    });
  }

  if (apps) {
    Object.keys(apps).forEach((accountId) => {
      statistics.totalApps += Object.keys(apps[accountId].widget).length;
    });
  }

  return {
    statistics,
  };
}
