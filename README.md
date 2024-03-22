# Express Server App

## Express API for Managing NBA Data

This is a simple Express.js application built for managing NBA data including players, teams, and conferences.

## Project Structure

- `index.js`: Entry point of the application where Express server is configured.
- `routes/playersroute.js`: Router for player-related endpoints.
- `routes/teamsroute.js`: Router for team-related endpoints.
- `data/players.js`: Contains sample NBA player data.
- `data/teams.js`: Contains sample NBA team data.
- `data/conference.js`: Contains sample NBA conference data.
- `views/index.ejs`: EJS template file displays "NBA" followed by a dynamic text value
- `public/script.js`: JavaScript code snippet adds a breathing text effect to an HTML element with the ID `breathingText`
- `css/`: Directory containing CSS files for styling

### Endpoints

- `GET /players`: Retrieves a list of NBA players with optional filtering by team and rings.
  - Query Parameters:
    - `team`: Filters players by the specified team.
    - `rings`: Filters players by the number of championship rings.
- `POST /players`: Adds a new NBA player to the list.
  - Request Body Parameters:
    - `name`: Name of the player (required).
    - `rings`: Number of championship rings (optional).
    - `mvps`: Number of MVP awards (optional).
    - `team`: Team of the player (required).
- `GET /players/:id`: Retrieves details of a specific NBA player by ID.
- `DELETE /players/:id`: Deletes a specific NBA player by ID.

- `GET /teams`: Retrieves a list of NBA teams.
- `POST /teams`: Adds a new NBA team to the list.
  - Request Body Parameters:
    - `team_name`: Name of the team (required).
    - `division`: Division of the team (required).
- `GET /teams/:id`: Retrieves details of a specific NBA team by ID.
- `DELETE /teams/:id`: Deletes a specific NBA team by ID.

- `GET /conferences`: Retrieves a list of NBA conferences.

### Data Structure

The provided data structure for NBA teams/players/conferences adheres to RESTful principles:

1. **Resource Identification**: Each teams/players/conferences is uniquely identified by its `id`, allowing clients to refer to specific teams.

2. **Uniform Interface**: The API provides a uniform interface for interacting with teams/players/conferences resources through standard HTTP methods.

3. **Statelessness**: The data API is stateless, meaning it doesn't maintain any client state. Each request is processed independently.

4. **Representation**: Teams/Players/Conferences are represented as JSON objects, a common format for representing resources in RESTful APIs.

5. **Self-Descriptive Messages**: While not explicitly included, the API responses could be extended to include metadata or hypermedia links to enhance self-descriptiveness and discoverability.
