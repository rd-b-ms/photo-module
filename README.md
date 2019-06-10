# photodisplay-module
Repository for a mock of the Airbnb photo display component.

## Stack
**Front-End**: React.js<br />
**Server**: Express<br />
**Database**: MySQL<br />
**Image Hosting**: AWS S3<br />

## Instructions for Setting Up Environment
1. Install dependencies with `npm install`
2. Ensure you have nodemon installed globally on your machine. If not, `npm install nodemon --save-dev`.
3. Bundle code with webpack by running `npm run build`
4. Run server with `npm run start`
5. Seed database with fake data by running `npm run seedDB`.

# SDC

### Updated + added CRUD Routes


#### GET
request sent to: ```/photos/get/:listingId```

A route with listingId returns an image taking the shape:
```
{
  id: Number,
  photoUrl: String,
  description: String,
  isVerified: Boolean,
}
```
Retrieves all the relvant photos for a particular listingId.
Expects status code 200


#### POST
request sent to: ```/photos/post/```
=======
POST request sent to:

A request taking in form data taking the shape:
```
{
  photoUrl: String,
  description: String,
  isVerified: Boolean,
  listingId: Number,
}
```
Posts a new photo intry to DB.
Expects status code 200


#### DELETE
request sent to: ```/photos/delete/:id```
A request taking in a table entry id of the shape:


```
{
  id : Number,
}
```
Deletes a table entry.
Expects status code 200


#### PUT
request sent to: ```/photos/update_entry/```

A request taking in form data the shame of:
```
{
  id: Number,
  photoUrl: String,
  description: String,
  isVerified: Boolean,
  listingId: Number,
}
```
Updates the information of a particular table entry located at provided id.

Expects status code 200

#### Fake Data Generation

 - ``` WARNING! THE FOLLOWING COMMAND GENERATES ALL 100 MILLION+ RECORDS```
 - ``` THIS COMMAND IS INTENTIONALLY BROKEN BY DEFAULT ```
To re-enable data generation, uncomment noted running script in file ``` data_gen/dataGen.js ```
To re-generate data => from root directory, run command:
```
NOTE: Data generation command is configured to allocate an additional 8GM of RAM
to the generation process. Ensure system has adequate free RAM. Or, execute command with
lower RAM allocation.
```
use: ```node --max-old-space-size=<additional ram> <path to file>```
```
node run big-data-gen
```

### Initialize PostgreSQL bash shell
 - If PostgreSQL was installed using homebrew, server can be started and stopped using brew services. From a terminal, use:
   - ```brew services start posgresql``` to start server
   - ```brew services stop postgresql``` to stop server

 - Once postgreSql server is running, to open PostgreSQL bash shell and immediately connect to a specific database:
  - From terminal, run: ```psql <database_name>```
  - So, to access this repo's database shell, execute, ```psql photo_module```

 - PostgreSQL shell connection to photo_module database will show command line: ```photo_module=#```

### Following commands are executed from psql bash shell.

 - 1: To describe all tables in selected databast, use ```\dt```
   - 1.1: Or, describe a specific table ```\dt <table_name>```
 - 2: To connect to another database, use: ```\c <database>```
 - 3: List all databases: ```\l```
 - 4: List all schemas of selected db: ```\dn```

 - 5: To execute a query with feedback use prefix: ```EXPLAIN ANALYZE <query>```
   - 5.1: To select a row for example: ```EXPLAIN ANALYZE SELECT * from photos WHERE listing_id=4873561;```

### Initialize Cassandra bash shell

 - From Hard Drive directory below user root directory:
   - Will run Cassandra server.

 ```cd usr/local/Cellar/cassandra/3.11.4/bin/```

 - Then, from any terminal bash, run: ```cqlsh --color``` to open the Cassandra bash shell using colored output text.
 - May omit the ```--color``` and just execute ```cqlsh``` as default command.

 - To execute a Cassandra .cql file without starting a shell session use:
```bin/cqlsh --file= <filename>```

 - So, for executing the Cassandra schema file creating the keyspace 'photo_module' and table 'photos_listings', from schema.cql

 - From the terminal, run:
```bin/cqlsh --file= /Users/nautilus/hackReactor/hrsf117-sdc/photodisplay-module/cassandra/schema.cql```

#### Alternative to start Cassandra Server
  - To start server process from the terminal run: ```brew services start cassandra```
  - To stop server process from the terminal run: ```brew services stop cassandra```
    - Ensure Cassandra isn't running as a background process using Activity Monitor
    - Can also use ```kill -9 <pid_number>``` to force kill Cassandra. Find PID with Activity Monitor, running as 'Java'

## Database Benchmarking

### PostgreSQL

  - When in psql bash shell (for database 'photo_module'), shell command line: ```photo_module=# <shell_command>```
    - To toggle on and off query-time response when executing ```psql``` shell commands, use: ```\timing```.
    - Or, use ```EXPLAIN ANALYZE <psql_shell_command>``` for a more robust query response.

##### Table indexing
 - From psql bash shell:
   - To create a B -Tree index on a PostgreSQL table, execute:
   ```CREATE INDEX <column_name> ON <table_name> USING <btree_or_other_index_type> (<column_name>);```
   - However, btree is the default index type. So, command can be shortened to:
   ```CREATE INDEX <column_name> ON <table_name>;```
