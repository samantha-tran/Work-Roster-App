export type EventType = {
  id?: String;
  title: String;
  start: String;
  end: String;
};

export type DecomposedEventType = {
  id?: string;
  title?: string;
  startTime: string;
  endTime: string;
  date: string;
};
