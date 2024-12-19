import { compareSync } from "bcrypt";
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
    const searchTerm = this.query?.searchTerm;

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields?.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: "i" },
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

  // TODO : Sort by createdAt
  sortBy() {
    const sort =
      (this?.query?.sort as string)?.split(",").join(" ") || "createdAt";
    console.log("sort -> ", sort);
    if (sort) {
      this.modelQuery = this.modelQuery.sort(sort);
    }

    return this;
  }

  // TODO : Sort by descending order
  sortOrder() {
    const sortOrder =
      (this?.query?.sortOrder as string)?.split(",").join(" ") || "-createdAt";
    console.log("sortOrder -> ", sortOrder);
    if (sortOrder) {
      this.modelQuery = this.modelQuery.sort(sortOrder);
    }
    return this;
  }
}

export default QueryBuilder;
