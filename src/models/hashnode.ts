export interface ArticleSummary {
  title: string;
  coverImage: string;
  brief: string;
  slug: string;
  totalReactions: number;
  dateAdded: Date;
}

export interface Article {
  author: any;
  title: string;
  brief: string;
  slug: string;
  totalReactions: number;
  dateAdded: Date;
  dateUpdated: Date;
  _id: string;
  isFeatured: boolean;
  content: string;
  coverImage: string;
  tags: [
    {
      name: string;
    }
  ];
}

export interface HashnodeResponse {
  data: {
    user: {
      publication: {
        posts: ArticleSummary[];
      };
    };
  };
}
