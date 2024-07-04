module.exports = {
  testPathIgnorePatterns: ["/node_modules"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@fullcalendar/*).+\\.[t|j]sx?$'
],
};