
export interface ConcertSummary {
  title: string;
  date: string;
  location: string;
  highlights: string[];
  description: string;
}

export interface Club {
  id: string;
  name: string;
  city: string;
  memberCount: number;
  image: string;
  description: string;
}
