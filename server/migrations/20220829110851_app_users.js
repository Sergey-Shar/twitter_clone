/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id")
    table.string("username").notNullable()
    table.string("password").notNullable()
    table.integer("posts").notNullable().defaultTo(0)
  })
};

