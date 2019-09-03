import sortBy from "array-sort-by";
import moment from "moment";

export const findById = (arr, id) => arr.find(c => c.id === id);

export const findByName = (arr, name) => arr.find(c => c.name === name);

export const filterContentByType = (artist, articles, name, type) => {
  if (type === "author") {
    return articles.filter(
      k => k.metadata.authorId === findByName(artist, name).id
    );
  }
  if (type === "recent") {
    return sortBy(
      articles,
      s => -new Date(moment(s.metadata.publishedAt).format("L"))
    );
  }
  if (type === "oldest") {
    return sortBy(
      articles,
      s => new Date(moment(s.metadata.publishedAt).format("L"))
    );
  }
  return articles;
};
