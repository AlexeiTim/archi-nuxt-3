export interface Slide {
    title: string;
    description: Description;
    link: string;
    image: string;
    id: string;
  }
  
  export interface Description {
    col1: Col;
    col2: Col;
  }
  
  export interface Col {
    title: string;
    description: string;
  }