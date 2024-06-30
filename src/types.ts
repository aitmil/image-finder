export interface Image {
  id: string;
  description: string;
  user: {
    name: string;
  };
  urls: {
    regular: string;
    small: string;
  };
}
