"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)());

const getBooks = (request, response) => {
  console.log(_config.default);

  _config.default.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
};

const addBook = (request, response) => {
  const {
    author,
    title
  } = request.body;

  _config.default.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], error => {
    if (error) {
      throw error;
    }

    response.status(201).json({
      status: 'success',
      message: 'Book added.'
    });
  });
};

app.route('/books') // GET endpoint
.get(getBooks) // POST endpoint
.post(addBook); // Start server

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImdldEJvb2tzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInBvb2wiLCJxdWVyeSIsImVycm9yIiwicmVzdWx0cyIsInN0YXR1cyIsInJvd3MiLCJhZGRCb29rIiwiYXV0aG9yIiwidGl0bGUiLCJib2R5IiwibWVzc2FnZSIsInJvdXRlIiwiZ2V0IiwicG9zdCIsImxpc3RlbiIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLHVCQUFaO0FBRUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBV0MsSUFBWCxFQUFSO0FBQ0FILEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBV0UsVUFBWCxDQUFzQjtBQUFFQyxFQUFBQSxRQUFRLEVBQUU7QUFBWixDQUF0QixDQUFSO0FBQ0FMLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLG9CQUFSOztBQUVBLE1BQU1LLFFBQVEsR0FBRyxDQUFDQyxPQUFELEVBQVVDLFFBQVYsS0FBdUI7QUFDdkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQUFaOztBQUNDQSxrQkFBS0MsS0FBTCxDQUFXLHFCQUFYLEVBQWtDLENBQUNDLEtBQUQsRUFBUUMsT0FBUixLQUFvQjtBQUNwRCxRQUFJRCxLQUFKLEVBQVc7QUFDVCxZQUFNQSxLQUFOO0FBQ0Q7O0FBQ0RMLElBQUFBLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixHQUFoQixFQUFxQlosSUFBckIsQ0FBMEJXLE9BQU8sQ0FBQ0UsSUFBbEM7QUFDRCxHQUxEO0FBTUQsQ0FSRDs7QUFVQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ1YsT0FBRCxFQUFVQyxRQUFWLEtBQXVCO0FBQ3JDLFFBQU07QUFBRVUsSUFBQUEsTUFBRjtBQUFVQyxJQUFBQTtBQUFWLE1BQW9CWixPQUFPLENBQUNhLElBQWxDOztBQUVBVCxrQkFBS0MsS0FBTCxDQUFXLG1EQUFYLEVBQWdFLENBQUNNLE1BQUQsRUFBU0MsS0FBVCxDQUFoRSxFQUFpRk4sS0FBSyxJQUFJO0FBQ3hGLFFBQUlBLEtBQUosRUFBVztBQUNULFlBQU1BLEtBQU47QUFDRDs7QUFDREwsSUFBQUEsUUFBUSxDQUFDTyxNQUFULENBQWdCLEdBQWhCLEVBQXFCWixJQUFyQixDQUEwQjtBQUFFWSxNQUFBQSxNQUFNLEVBQUUsU0FBVjtBQUFxQk0sTUFBQUEsT0FBTyxFQUFFO0FBQTlCLEtBQTFCO0FBQ0QsR0FMRDtBQU1ELENBVEQ7O0FBV0FyQixHQUFHLENBQ0FzQixLQURILENBQ1MsUUFEVCxFQUVFO0FBRkYsQ0FHR0MsR0FISCxDQUdPakIsUUFIUCxFQUlFO0FBSkYsQ0FLR2tCLElBTEgsQ0FLUVAsT0FMUixFLENBT0E7O0FBQ0FqQixHQUFHLENBQUN5QixNQUFKLENBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQS9CLEVBQXFDLE1BQU07QUFDekNuQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxrQkFBYjtBQUNELENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IHBvb2wgZnJvbSAnLi9jb25maWcnXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcbmFwcC51c2UoY29ycygpKVxuXG5jb25zdCBnZXRCb29rcyA9IChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuXHRjb25zb2xlLmxvZyhwb29sKTtcbiAgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSBib29rcycsIChlcnJvciwgcmVzdWx0cykgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRzLnJvd3MpXG4gIH0pXG59XG5cbmNvbnN0IGFkZEJvb2sgPSAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBhdXRob3IsIHRpdGxlIH0gPSByZXF1ZXN0LmJvZHlcblxuICBwb29sLnF1ZXJ5KCdJTlNFUlQgSU5UTyBib29rcyAoYXV0aG9yLCB0aXRsZSkgVkFMVUVTICgkMSwgJDIpJywgW2F1dGhvciwgdGl0bGVdLCBlcnJvciA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgICByZXNwb25zZS5zdGF0dXMoMjAxKS5qc29uKHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdCb29rIGFkZGVkLicgfSlcbiAgfSlcbn1cblxuYXBwXG4gIC5yb3V0ZSgnL2Jvb2tzJylcbiAgLy8gR0VUIGVuZHBvaW50XG4gIC5nZXQoZ2V0Qm9va3MpXG4gIC8vIFBPU1QgZW5kcG9pbnRcbiAgLnBvc3QoYWRkQm9vaylcblxuLy8gU3RhcnQgc2VydmVyXG5hcHAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZ2ApXG59KSJdfQ==