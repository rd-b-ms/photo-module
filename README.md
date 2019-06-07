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

## Fake Data Generation

``` WARNING! THE FOLLOWING COMMAND GENERATES ALL 100 MILLION+ RECORDS```
``` THIS COMMAND IS INTENTIONALLY BROKEN BY DEFAULT ```
To re-enable data generation, uncomment noted running script in file ``` data_gen/dataGen.js ```
To re-generate data => from root directory, run command:
```
node run big-data-gen
```

