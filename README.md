## How to change the code to support different file format versions?
Adjust the code to detect the version from additional file details or meta-data. Develop dedicated parsing functions for each version to ensure compatibility.

## How will the import system change if in the future we need to get this data from a web API?
The integration for fetching data from a web API has been implemented. However, it requires thorough testing, data validation, and appropriate constraints.

## If in the future it will be necessary to do the calculations using the national bank rate, how could this be added to the system?
To incorporate national bank rates, establish a connection with the bank's API to fetch the rate data. Users can select either our exchanger or bank rates in the settings. Subsequently, modify queries based on the user's preference.

## How would it be possible to speed up the execution of requests if the task allowed you to update market data once a day or even less frequently? Please explain all possible solutions you could think of.
Potential strategies to expedite request execution:

- Caching: Store frequently accessed data in memory to reduce repeated database queries.
- Materialized Views: Compute and pre-store complex query results for a day to minimize real-time calculations.
- Optimized Indexing: Optimize database indexing to enhance query performance.
- Query Caching: Cache query results for repeated requests, improving response times.