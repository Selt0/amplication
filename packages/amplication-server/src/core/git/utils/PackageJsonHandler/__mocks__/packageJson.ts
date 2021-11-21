export const unModifiedScripts = JSON.stringify({
  start: 'react-scripts start',
  build: 'react-scripts build',
  test: 'react-scripts test',
  eject: 'react-scripts eject'
});
export const unModifiedPackageJson = `{
    "name": "test-local-admin",
    "private": true,
    "dependencies": {
      "@apollo/client": "3.3.18",
      "@material-ui/core": "4.12.1",
      "gql": "1.1.2",
      "graphql": "14.7.0",
      "graphql-tag": "2.12.4",
      "lodash": "4.17.21",
      "pluralize": "7.0.0",
      "ra-data-graphql-amplication": "0.0.6",
      "react": "16.14.0",
      "react-admin": "3.17.0",
      "react-apollo": "3.1.5",
      "react-dom": "16.14.0",
      "react-scripts": "4.0.3",
      "sass": "^1.39.0",
      "typescript": "4.2.4",
      "web-vitals": "1.1.2"
    },
    "scripts": ${unModifiedScripts},
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "proxy": "http://localhost:3000",
    "devDependencies": {
      "@testing-library/jest-dom": "5.14.1",
      "@testing-library/react": "11.2.7",
      "@testing-library/user-event": "13.2.0",
      "@types/jest": "26.0.16",
      "@types/lodash": "4.14.171",
      "@types/node": "12.20.16",
      "@types/react": "16.14.11",
      "@types/react-dom": "17.0.0"
    }
  }`;
export const modifiedScripts = JSON.stringify({
  start: 'react-scripts start',
  build: 'react-scripts build',
  test: 'react-scripts test --passWithNoTests',
  eject: 'react-scripts eject'
});

export const modifiedPackageJson = `{
    "name": "test-local-admin",
    "private": true,
    "dependencies": {
      "@apollo/client": "3.3.18",
      "@material-ui/core": "4.12.1",
      "gql": "1.1.2",
      "graphql": "14.7.0",
      "graphql-tag": "2.12.4",
      "lodash": "4.17.21",
      "pluralize": "7.0.0",
      "ra-data-graphql-amplication": "0.0.6",
      "react": "16.14.0",
      "react-admin": "3.17.0",
      "react-apollo": "3.1.5",
      "react-dom": "16.14.0",
      "react-scripts": "4.0.3",
      "sass": "^1.39.0",
      "typescript": "4.2.4",
      "web-vitals": "1.1.2"
    },
    "scripts": ${modifiedScripts},
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "proxy": "http://localhost:3000",
    "devDependencies": {
      "@testing-library/jest-dom": "5.14.1",
      "@testing-library/react": "11.2.7",
      "@testing-library/user-event": "13.2.0",
      "@types/jest": "26.0.16",
      "@types/lodash": "4.14.171",
      "@types/node": "12.20.16",
      "@types/react": "16.14.11",
      "@types/react-dom": "17.0.0"
    }
  }`;
