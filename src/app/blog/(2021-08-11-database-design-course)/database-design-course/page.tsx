import type { Metadata } from "next";
import { PostLayout } from "@/components/blog/PostLayout";
import { post } from "./meta";
import heroImage from "./hero.png";

export const metadata: Metadata = {
  title: post.title,
  description: post.summary,
  openGraph: {
    title: post.title,
    description: post.summary,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateUpdated,
    images: post.images,
  },
};

export default function DatabaseDesignCourse() {
  return (
    <PostLayout post={post} heroImage={heroImage}>
      <h2>Concepts</h2>

      <ul>
        <li>Entity - Table name (e.g. user, article)</li>
        <li>Attribute / Field / Column</li>
        <li>
          Relation: relation between entities
          <ul>
            <li>1:1 - One to one</li>
            <li>1:N - One to many</li>
            <li>M:N - Many to many</li>
          </ul>
        </li>
        <li>Tuple / Row / Record / Entry</li>
        <li>
          Table / File: Collection of tuples or rows and attribute names
        </li>
        <li>
          Database design: Process of designing data tables to guarantee data
          integrity
        </li>
        <li>Schema: structure of the database</li>
        <li>Keys: Used to guarantee uniqueness. Usually IDs.</li>
        <li>
          SQL: Structured Query Language
          <ul>
            <li>DDL: Data definition language. Part of SQL to define schema.</li>
            <li>
              DML: Data management language. Part of SQL to query data.
            </li>
          </ul>
        </li>
        <li>
          First formal form (1NF):{" "}
          <a
            href="https://en.wikipedia.org/wiki/First_normal_form"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://en.wikipedia.org/wiki/First_normal_form
          </a>
          <ul>
            <li>
              Atomic columns
              <ul>
                <li>
                  Value should be <strong>1 thing</strong>. E.g. Full name
                  should be splitted into First name and Last name
                </li>
              </ul>
            </li>
            <li>
              <strong>Singular columns</strong>
              <ul>
                <li>
                  E.g. &quot;favourite movies&quot; would not work because you
                  could store multiple items in the same field.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                No table column can have tables as values
              </strong>
              . Most RDBMS enforce 1NF. No SQL systems allow an attribute to
              have relations and subvalues.
            </li>
          </ul>
        </li>
        <li>
          Parent / Child:
          <ul>
            <li>
              In a relationship, there is always a parent and a child
            </li>
            <li>Parent: Has Primary Key (PK)</li>
            <li>Child: Has Foreign Key (FK)</li>
          </ul>
        </li>
        <li>
          Intermediary table / Junction table:
          <ul>
            <li>For implementing M:N relationships</li>
          </ul>
        </li>
        <li>
          Binary relationships:
          <ul>
            <li>Usually, relationships are between two entities.</li>
            <li>It could be between more than two entities</li>
          </ul>
        </li>
        <li>
          Index:
          <ul>
            <li>
              A database index is a data structure that improves the speed of
              data retrieval operations on a database table at the cost of
              additional writes and storage space to maintain the index data
              structure.{" "}
              <a
                href="https://en.wikipedia.org/wiki/Database_index"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://en.wikipedia.org/wiki/Database_index
              </a>
            </li>
          </ul>
        </li>
        <li>
          Look up table
          <ul>
            <li>
              Instead of repeating a membership like gold, silver, etc. Have a
              second table and reference it. Kind of Enum tables.
            </li>
            <li>
              user:
              <ul>
                <li>| membership_id |</li>
              </ul>
            </li>
            <li>
              membership:
              <ul>
                <li>| id | membership |</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Keys</h2>

      <ul>
        <li>
          Superkey: Any number of columns that create a unique key combining the
          values
          <ul>
            <li>
              There are many combinations of columns that create a unique key, so
              there are many superkeys.
            </li>
          </ul>
        </li>
        <li>
          Candidate key: Superkey with the least number of columns
          <ul>
            <li>Could have many candidate keys: email, username, ID.</li>
          </ul>
        </li>
        <li>
          Primary key:
          <ul>
            <li>Unique</li>
            <li>Never changing</li>
            <li>Never null</li>
          </ul>
        </li>
        <li>
          Alternate key
          <ul>
            <li>Unique, never changing, never null.</li>
            <li>Other candidate keys that are not the primary</li>
          </ul>
        </li>
        <li>
          Surrogate key: Key that is created to guarantee uniqueness, opposed to
          natural keys. E.g. user_id.
          <ul>
            <li>Could be autoincrement or UUID</li>
            <li>
              Surrogate are not usually given to the user. Because if you share
              the ID, it starts to gain meaning and become a natural key.
            </li>
          </ul>
        </li>
        <li>
          Natural key: Key that occurs naturally in data. E.g. username could be
          a natural key.
        </li>
        <li>
          Surrogate key vs Natural key:
          <ul>
            <li>
              Usually easier to use surrogate keys than natural keys
              <ul>
                <li>
                  Don&apos;t need to worry about data changing, because they will
                  be unique
                </li>
              </ul>
            </li>
            <li>
              Be consistent and always use surrogate or natural keys
            </li>
          </ul>
        </li>
        <li>
          Foreign key:
          <ul>
            <li>
              Reference to a primary key from a different table
            </li>
            <li>NOT NULL: to require and ensure there is a relationship</li>
            <li>Constraints</li>
            <li>
              Foreign key constraints
              <ul>
                <li>
                  ON UPDATE (if the foreign key in the parent changes)
                  <ul>
                    <li>
                      CASCADE: Update the foreign key to reflect the change
                    </li>
                    <li>
                      RESTRICT (NO ACTION): Restrict the change in the parent
                      table
                    </li>
                    <li>SET NULL: Set NULL in the foreign key column</li>
                  </ul>
                </li>
                <li>
                  ON DELETE (if row with primary key referenced in foreign key is
                  deleted)
                  <ul>
                    <li>CASCADE: Delete the row with the foreign key</li>
                    <li>
                      RESTRICT (NO ACTION): Restrict the change in the parent
                      table
                    </li>
                    <li>SET NULL: Set NULL in the foreign key column</li>
                  </ul>
                </li>
                <li>
                  RESTRICT vs NO ACTION: In Postgres, the difference between
                  RESTRICT and NO ACTION only arises when you define a constraint
                  as <code>DEFERRABLE</code> with an{" "}
                  <code>INITIALLY DEFERRED</code> or{" "}
                  <code>INITIALLY IMMEDIATE</code> mode.{" "}
                  <a
                    href="https://www.postgresql.org/docs/current/sql-set-constraints.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.postgresql.org/docs/current/sql-set-constraints.html
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Simple key: One column</li>
        <li>Composite key: Multiple columns</li>
        <li>
          Compound key: Same as composite keys. Normally used interchangeably,
          but better to stick to Composite key. Compound keys usually have all
          of the attributes being keys to other entities (e.g. many-to-many
          relationships).{" "}
          <a
            href="https://dba.stackexchange.com/questions/3134/in-sql-is-it-composite-or-compound-keys"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://dba.stackexchange.com/questions/3134/in-sql-is-it-composite-or-compound-keys
          </a>
        </li>
      </ul>

      <h3>Data integrity</h3>

      <ul>
        <li>
          Entity integrity: Ensure uniqueness in every entity. Usually solved
          with an ID column.
        </li>
        <li>
          Relational integrity / Referencial integrity: Usually managed by RDBMS
          to ensure relations exist and are safe.
          <ul>
            <li>Foreign keys should have constraints</li>
          </ul>
        </li>
        <li>
          Domain integrity: Data is valid and follows the expected type. Partly
          solved with types. Also adding validations would help.
        </li>
      </ul>

      <h2>Naming convention</h2>

      <ul>
        <li>
          All lowercase
          <ul>
            <li>E.g. user, instead of User</li>
          </ul>
        </li>
        <li>
          Singular entity name
          <ul>
            <li>E.g. user, article</li>
          </ul>
        </li>
        <li>
          Underscores to separate entity words
          <ul>
            <li>E.g. card_payment instead of CardPayment</li>
          </ul>
        </li>
        <li>
          Name ID columns with the table name: E.g. &quot;user&quot; table has
          &quot;user_id&quot;. This way, all the tables referencing user_id would
          have the same name for it, including the &quot;user&quot; table.
        </li>
      </ul>

      <h2>Database Relationships</h2>

      <ul>
        <li>One to one</li>
        <li>One to many</li>
        <li>Many to many</li>
      </ul>

      <h3>One to one relationship (1:1)</h3>

      <p>Could be:</p>

      <ul>
        <li>
          <strong>Attribute</strong>
          <ul>
            <li>
              If only need one data point to define the entity.
            </li>
            <li>E.g. username: text</li>
          </ul>
        </li>
        <li>
          <strong>Foreign key to another table</strong>
          <ul>
            <li>
              If you have more than one attribute for the same entity
              <ul>
                <li>
                  E.g. Card number, card name, card issue date, etc.
                </li>
              </ul>
            </li>
            <li>
              Add foreign key on parent table
              <ul>
                <li>| user | card_id |</li>
                <li>| card |</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h3>One to many relationship (1:N)</h3>

      <ul>
        <li>
          Add foreign key to child table
          <ul>
            <li>| user |</li>
            <li>| card | user_id |</li>
          </ul>
        </li>
      </ul>

      <h3>Many to many relationship (M:N)</h3>

      <ul>
        <li>
          Create a Intermediary / Junction table:
          <ul>
            <li>| user |</li>
            <li>| user_id | card_id |</li>
            <li>| card |</li>
          </ul>
        </li>
      </ul>

      <h2>Entity relationship modeling</h2>

      <p>Standard for drawing schemas</p>

      <ul>
        <li>
          ER Model:{" "}
          <a
            href="https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entity-relationship model
          </a>
          <ul>
            <li>ERD: entity relationship diagram</li>
          </ul>
        </li>
        <li>
          EER Model:{" "}
          <a
            href="https://en.wikipedia.org/wiki/Enhanced_entity%E2%80%93relationship_model"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enhanced entity-relationship model
          </a>
        </li>
        <li>
          Cardinality:
          <ul>
            <li>Multiple lines represent Many</li>
            <li>One vertical line represents 1</li>
          </ul>
        </li>
        <li>
          Modality:
          <ul>
            <li>
              A 0 represents that the foreign key can be null, so there could be
              rows that don&apos;t have a parent.
              <ul>
                <li>Read as 0 or 1.</li>
              </ul>
            </li>
            <li>
              A line represents 1. Read as 1 or 1 when two vertical lines are
              displayed. It means that the foreign key has a NOT NULL constraint.
            </li>
          </ul>
        </li>
      </ul>

      <figure>
        <img
          alt="FocusKeep screenshot"
          src="/content/images/2021/08/eer-cardinality.png"
        />
        <figcaption className="text-center">Cardinality</figcaption>
      </figure>

      <figure>
        <img
          alt="Modality"
          src="/content/images/2021/08/eer-modality.png"
        />
        <figcaption className="text-center">Modality</figcaption>
      </figure>

      <h2>Normalization</h2>

      <ul>
        <li>
          1NF: First normal form
          <ul>
            <li>Making everything atomic</li>
            <li>
              A relation is in first normal form if and only if no attribute
              domain have relations as elements.
            </li>
            <li>
              Basically, if a field has multiple values, that should be split
              into two tables.
              <ul>
                <li>| user_id |</li>
                <li>
                  | email_id | email | user_id (fk) | (this allows for multiple
                  emails)
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          2NF: Second normal form
          <ul>
            <li>Removing partial dependencies</li>
            <li>A relation is in 2NF if it is in 1NF.</li>
            <li>
              There are no partial dependencies for the relationship.
            </li>
            <li>
              E.g.
              <ul>
                <li>user: | user_id |</li>
                <li>
                  book_author: | book_id | user_id | book_summary (wrong because
                  it depends on the book_id) |
                </li>
                <li>book: | book_id | title |</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          3NF: Third normal form
          <ul>
            <li>Removing transitive dependencies</li>
            <li>
              E.g. poor design:
              <ul>
                <li>| review_id | stars | stars_meaning |</li>
                <li>
                  Star meaning changes with stars, so depends on something that
                  is not a key
                </li>
              </ul>
            </li>
            <li>
              E.g. better design:
              <ul>
                <li>| review_id | star_id |</li>
                <li>| star_id | stars | stars_meaning |</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Indexes</h2>

      <ul>
        <li>
          Clustered
          <ul>
            <li>Reorganizes the data</li>
            <li>Can only have one</li>
          </ul>
        </li>
        <li>
          Non clustered
          <ul>
            <li>Points to the data</li>
            <li>E.g. end of the book index</li>
            <li>Can have multiple</li>
          </ul>
        </li>
        <li>
          Composite
          <ul>
            <li>Index on multiple columns</li>
          </ul>
        </li>
      </ul>

      <p>Pros:</p>

      <ul>
        <li>Faster queries</li>
      </ul>

      <p>Cons:</p>

      <ul>
        <li>Storage and memory</li>
        <li>
          Need to update the index when changes on the data happen. Writes are
          slower.
        </li>
      </ul>

      <h2>Joins</h2>

      <ul>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Join_(SQL)"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://en.wikipedia.org/wiki/Join_(SQL)
          </a>
        </li>
        <li>
          INNER JOIN (default JOIN)
          <ul>
            <li>Default join between two tables</li>
            <li>
              Only returns the rows that match the condition in both tables
            </li>
          </ul>
        </li>
        <li>
          Outer joins
          <ul>
            <li>
              Include all columns that don&apos;t match one in the joined table,
              including null values.
            </li>
            <li>
              When the joined column is a foreign key and NOT NULL, outer joins
              would return the same than inner joins.
            </li>
            <li>
              Types:
              <ul>
                <li>
                  Left outer join (default): Include all non-matching rows in the
                  left table
                </li>
                <li>
                  Right outer join: Include all non-matching rows in the right
                  table
                </li>
                <li>
                  Full outer join: Include non-matching rows from all tables
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Self join:
          <ul>
            <li>Join a table with itself</li>
            <li>
              For example:
              <ul>
                <li>| user_id | name | referred_by |</li>
                <li>
                  Self join on the referred_by to find the user and the referral
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <pre>
        <code className="language-sql">{`SELECT u1.name, u2.name AS "referred_by"
FROM user AS u1
INNER JOIN user AS u2
ON u1.referred_by = u2.user_id`}</code>
      </pre>
    </PostLayout>
  );
}
