import { FilterQuery, Model, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // TODO : Search by title
  search(searchableFields: string[]) {
    const search = this.query?.search;
    // console.log("search -> ", search);

    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields?.map(
          (field) =>
            ({
              [field]: { $regex: search, $options: "i" },
            } as FilterQuery<T>)
        ),
      });
    }
    return this;
  }

  // TODO : Filter by authorId
  filter() {
    const authorId = this.query?.filter;

    if (authorId) {
      this.modelQuery = this.modelQuery.find({
        author: authorId,
      } as FilterQuery<T>);
    }
    return this;
  }

  sort() {
    const { sortBy, sortOrder } = this.query;
    const sortOption: { [key: string]: 1 | -1 } = {};

    if (sortBy && typeof sortBy === "string" && typeof sortOrder === "string") {
      sortOption[sortBy] = sortOrder === "desc" ? -1 : 1;
    }

    this.modelQuery = this.modelQuery.sort(sortOption);
    return this;
  }
}

export default QueryBuilder;
