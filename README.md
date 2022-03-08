<div id="top"></div>
<!--
***
*** This readme template was inspired by: https://github.com/othneildrew/Best-README-Template/
***
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->
## CRUD API Using Express.js and Sequelize

Welcome to the _GitHub repository_ of my sixth back-end project, **Blogs API**!
Here you can find information about the project's development, such as which technologies were used, how to install and run the project, usage and more.

This back-end application was developed during my time at [Trybe](https://www.betrybe.com/) to practice the lessons learned on Express.js and the Sequelize ORM.
It is a RESTful API that uses a popular design pattern choice for API services, known as _multi-layered architecture_. In this case, the main three layers used were
_models_, _services_ and _controllers_. The additional directories created by Sequelize include:

* seeders - a seeder file inserts custom data into a table;
* migrations - a migration file creates a table in the database;
* config - contains the connection instructions for each environment;

With Sequelize, the once tedious and time consuming task of writing SQL queries is automated and facilitated with the model manipulation methods such as _create_, _findAll_ and _destroy_, and the Sequelize CLI commands. You can refer to the [documentation](https://sequelize.org/master/manual/) for more info.

<br>

---

### Endpoints

A list of all endpoints and supported methods.

* **/login** - Using the `POST` HTTP method, allows the signed in user to login with the following JSON structure:
```
  {
    "email": "example@mail.com",
    "password": "123456"
  }
```

The generated token should be used in the _Authorization_ header;

<br />

* **/categories** - Using the `POST` HTTP method, allows the authenticated user to create a category with the following JSON structure:
```
 {
   "name": "food"
 }
```

The user may also list all categories using the `GET` HTTP method;

<br />

* **/post** - Using the `POST` HTTP method, allows the authenticated user to create a blog post with the following JSON structure:
```
{
  "title": "Latest updates, August 1st",
  "content": "The text for the blog post goes here",
  "categoryIds": [1, 2]
}
```

The user may also list all blog posts using the `GET` HTTP method;

<br />

* **/post/:id**

  * Using the `GET` HTTP method, allows the authenticated user to view a particular blog post by the provided _id_ param.

  * The owner of the post may edit their post using the `PUT` HTTP method and the following JSON structure:
  ```
  {
    "title": "New title",
    "content": "New text"
  }
  ```

  * The owner of the post may delete their post using the `DELETE` HTTP method.

<br />

* **/products** - Using the `POST` HTTP method, allows the authenticated user to create a product with the following JSON structure:
```
  {
    "name": "Long iron sword",
    "amount": "30 gold nuggets"
  }
```

The user may also list all products using the `GET` HTTP method;

<br />

* **/user** - Using the `POST` HTTP method, allows the user to sign in with the following JSON structure:
```
{
  "displayName": "Brett Wiltshire", // must be at least 8 characters long
  "email": "brett@email.com", // must be in the <prefix>@<domain> format
  "password": "123456", // must be at least 6 characters long
  "image": "http://someurl.com" // optional
}
```
The user may also list all users using the `GET` HTTP method;

<br />

* **/user/:id** - Using the `GET` HTTP method, allows the authenticated user to view a particular user by the provided _id_ param;

<br />


* **/user/me** - Using the `DELETE` HTTP method, allows the authenticated user to terminate their account;

<br />

### Tables

The MySQL schema will contain five tables: **BlogPosts**, **Categories**, **PostsCategories**, **SequelizeMeta** and **Users**.

<br />

---

### Built With

List of major frameworks/libraries used to bootstrap this project:

* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Sequelize](https://sequelize.org/)
* [JWT](https://jwt.io/)
* [MySQL](https://www.mysql.com/) - database
* [Joi](https://joi.dev/) - error handling

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pedrotrasfereti/blogs-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   npm start
   ```
4. Visit `http://localhost:3000/` on your browser


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pedro Trasfereti - [LinkedIn](https://www.linkedin.com/in/pedro-trasfereti/) - pedrotrasfereti@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of resources I find helpful and would like to give credit to:

* [ESLint](https://eslint.org/) - javascript linter
* [Img Shields](https://shields.io) - readme
* [Nodemon](https://nodemon.io/) - development
* [Dotenv](https://www.npmjs.com/package/dotenv) - development
* [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/pedrotrasfereti/trybesmith/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/pedrotrasfereti/trybesmith/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/pedrotrasfereti/trybesmith/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/pedrotrasfereti/trybesmith/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pedro-trasfereti/
