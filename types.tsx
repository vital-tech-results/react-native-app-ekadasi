export type RootStackParamList = {
  Ekadasi: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Ekadasi: undefined;
  PureBhakti: undefined;
  Contact: undefined;
  RoadMap: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  PureBhaktiScreen: undefined;
};

export type TabThreeParamList = {
  ContactScreen: undefined;
};

export type TabFourParamList = {
  ProductStash: undefined;
};

export enum OrientationLock {
  DEFAULT = 0,
  ALL = 1,
  PORTRAIT = 2,
  PORTRAIT_UP = 3,
  PORTRAIT_DOWN = 4,
  LANDSCAPE = 5,
  LANDSCAPE_LEFT = 6,
  LANDSCAPE_RIGHT = 7,
  OTHER = 8,
  UNKNOWN = 9,
}

export declare enum Orientation {
  UNKNOWN = 0,
  PORTRAIT_UP = 1,
  PORTRAIT_DOWN = 2,
  LANDSCAPE_LEFT = 3,
  LANDSCAPE_RIGHT = 4,
}
