export const StarRailRoute: RoutesInfo = {
  path: 'star-rail',
  title: 'Honkai Star Rail'
};

export const HomeRoute: RoutesInfo = {
  path: 'home',
  title: 'Home'
};

export const DummyRoute: RoutesInfo = {
  path: 'dummy-route',
  title: ''
};

interface RoutesInfo {
  path: string;
  title: string;
}
