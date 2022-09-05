# Development Reference: 

<img width="1434" alt="Screenshot 2022-09-06 at 3 16 02 AM" src="https://user-images.githubusercontent.com/9687524/188515426-554bbba8-a9f8-4bec-a7cf-5be10f40cfa0.png">

<img width="1435" alt="Screenshot 2022-09-06 at 3 18 09 AM" src="https://user-images.githubusercontent.com/9687524/188515440-2dc3d5f3-279f-442f-a592-7381831b17d8.png">


# Getting Started The Graph Repo

### Steps to run the project:

1. Run - `npm run clean`
2. Run - `npm install`
3. Run - `npm start`

## Available Scripts

In the project directory, you can run:

### `npm run clean`

Clean any node_modules present in packages/\*

### `npm install`

Set npm config legacy-peer-deps true and install dependecies from packages/\*

### `npm start`

start the node server and web application.
Development mode: runs web application accessible on port 3000
(http://localhost:3000/graph-list)

runs node api accessible on port 9000

## `Note: install lerna`

Note: this project is working on lerna, make sure that you have lerna installed.
otherwise use this command: npm i -D lerna

### `If lerna doesn't work`

1. Navigate to /packages/api
2. run `npm install`
3. run `npm start`
4. Navaigate to /packages/web
5. run `npm install`
6. run `npm start`
