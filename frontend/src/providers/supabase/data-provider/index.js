// @ts-nocheck
import { generateFilter, handleError } from "../utils";

export const dataProvider = (supabaseClient) => {
  return {
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
      const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {};

      const client = meta?.schema
        ? supabaseClient.schema(meta.schema)
        : supabaseClient;

      const query = client.from(resource).select(meta?.select ?? "*", {
        count: meta?.count ?? "exact",
      });

      if (mode === "server") {
        query.range((current - 1) * pageSize, current * pageSize - 1);
      }

      sorters?.map((item) => {
        const [foreignTable, field] = item.field.split(/\.(?=[^.]+$)/);

        if (foreignTable && field) {
          query
            .select(meta?.select ?? `*, ${foreignTable}(${field})`)
            .order(field, {
              ascending: item.order === "asc",
              foreignTable: foreignTable,
            });
        } else {
          query.order(item.field, {
            ascending: item.order === "asc",
          });
        }
      });

      filters?.map((item) => {
        generateFilter(item, query);
      });

      const { data, count, error } = await query;

      if (error) {
        return handleError(error);
      }

      return {
        data: data || [],
        total: count || 0,
      };
    },

    getMany: async ({ resource, ids, meta }) => {
      const client = meta?.schema
        ? supabaseClient.schema(meta.schema)
        : supabaseClient;

      const query = client.from(resource).select(meta?.select ?? "*");

      if (meta?.idColumnName) {
        query.in(meta.idColumnName, ids);
      } else {
        query.in("id", ids);
      }

      const { data, error } = await query;

      if (error) {
        return handleError(error);
      }

      return {
        data: data || [],
      };
    },

    create: async ({ resource, variables, meta }) => {
      const client = meta?.schema
        ? supabaseClient.schema(meta.schema)
        : supabaseClient;

      const query = client.from(resource).insert(variables);

      query.select(meta?.select ?? "*");

      const { data, error } = await query;

      if (error) {
        return handleError(error);
      }

      return {
        data: (data || [])[0],
      };
    },

    createMany: async ({ resource, variables, meta }) => {
      const client = meta?.schema
        ? supabaseClient.schema(meta.schema)
        : supabaseClient;

      const query = client.from(resource).insert(variables);

      query.select(meta?.select ?? "*");

      const { data, error } = await query;

      if (error) {
        return handleError(error);
      }

      return {
        data: data,
      };
    },

    update: async ({ resource, id, variables, meta }) => {
      const client = meta?.schema
        ? supabaseClient.schema(meta.schema)
        : supabaseClient;

      const query = client.from(resource).update(variables);

      if (meta?.idColumnName) {
        query.eq(meta.idColumnName, id);
      } else {
        query.match({ id });
      }

      query.select(meta?.select ?? "*");

      const { data, error } = await query;
      if (error) {
        return handleError(error);
      }

      return {
        data: (data || [])[0],
      };
    },

    updateMany: async ({ resource, ids, variables, meta }) => {
      const response = await Promise.all(
        ids.map(async (id) => {
          const client = meta?.schema
            ? supabaseClient.schema(meta.schema)
            : supabaseClient;

          const query = client.from(resource).update(variables);

          if (meta?.idColumnName) {
            query.eq(meta.idColumnName, id);
          } else {
            query.match({ id });
          }

          query.select(meta?.select ?? "*");

          const { data, error } = await query;
          if (error) {
            return handleError(error);
          }

          return (data || [])[0];
        })
      );

      return {
        data: response,
      };
    },

    getOne: async ({ resource, id, meta }) => {
      const client = meta?.schema
        ? supabaseClient.schema(meta.schema)
        : supabaseClient;

      const query = client.from(resource).select(meta?.select ?? "*");

      if (meta?.idColumnName) {
        query.eq(meta.idColumnName, id);
      } else {
        query.match({ id });
      }

      const { data, error } = await query;
      if (error) {
        return handleError(error);
      }

      return {
        data: (data || [])[0],
      };
    },

    deleteOne: async ({ resource, id, meta }) => {
      const client = meta?.schema
        ? supabaseClient.schema(meta.schema)
        : supabaseClient;

      const query = client.from(resource).delete();

      if (meta?.idColumnName) {
        query.eq(meta.idColumnName, id);
      } else {
        query.match({ id });
      }

      const { data, error } = await query;
      if (error) {
        return handleError(error);
      }

      return {
        data: (data || [])[0],
      };
    },

    deleteMany: async ({ resource, ids, meta }) => {
      const response = await Promise.all(
        ids.map(async (id) => {
          const client = meta?.schema
            ? supabaseClient.schema(meta.schema)
            : supabaseClient;

          const query = client.from(resource).delete();

          if (meta?.idColumnName) {
            query.eq(meta.idColumnName, id);
          } else {
            query.match({ id });
          }

          const { data, error } = await query;
          if (error) {
            return handleError(error);
          }

          return (data || [])[0];
        })
      );

      return {
        data: response,
      };
    },

    getApiUrl: () => {
      throw Error("Not implemented on refine-supabase data provider.");
    },

    custom: () => {
      throw Error("Not implemented on refine-supabase data provider.");
    },
  };
};