export interface Person {
  name?: string;
  mass?: string;
  gender?: string;
  height?: string;
  homeworld?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  films?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
}
export interface Page {
  total: number;
  next: string;
  previous: string;
}
export interface PageFilter {
  page: number;
}

export interface PersonSearch {
  search: string;
}
export interface PersonResponse {
  data: [Person];
  page: Page;
}

export interface PaginationProps {
  page: number;
  count: number;
}
