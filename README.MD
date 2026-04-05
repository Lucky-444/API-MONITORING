# API Monitoring System

A comprehensive API monitoring and analytics platform built with Node.js, Express, PostgreSQL, MongoDB, and RabbitMQ. This system provides real-time monitoring, logging, and alerting capabilities for API endpoints.

## Features

- **Real-time API Monitoring**: Track API performance, response times, and error rates
- **Multi-Database Support**: Uses PostgreSQL for relational data and MongoDB for flexible document storage
- **Message Queue Integration**: RabbitMQ for asynchronous processing and event-driven architecture
- **Authentication & Security**: JWT-based authentication with bcrypt password hashing
- **Rate Limiting**: Built-in rate limiting to prevent abuse
- **Logging**: Comprehensive logging with Winston
- **Admin Interface**: PGAdmin for database management
- **Containerized**: Fully dockerized for easy deployment

## Prerequisites

Before running this application, make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd api-monitoring
   ```

2. **Environment Setup:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database Configuration
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_DB=api_monitoring
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=sashanka

   # MongoDB Configuration
   MONGODB_URI=mongodb://localhost:27017/api_monitoring

   # RabbitMQ Configuration
   RABBITMQ_URL=amqp://guest:guest@localhost:5672

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRES_IN=24h

   # Server Configuration
   PORT=3000
   NODE_ENV=development
   ```

## Usage

### Running with Docker Compose

To start all services (PostgreSQL, MongoDB, RabbitMQ, PGAdmin, and the API server):

```bash
# Using Docker Compose V2 (recommended)
docker compose up -d

# Or using Docker Compose V1
docker-compose up -d
```

This will start the following services:
- **API Server**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **MongoDB**: localhost:27017
- **RabbitMQ Management**: http://localhost:15672 (guest/guest)
- **PGAdmin**: http://localhost:8080 (admin@admin.com / secure)

### Stopping the Services

```bash
# Using Docker Compose V2
docker compose down

# Or using Docker Compose V1
docker-compose down
```

### Viewing Logs

```bash
# View logs for all services
docker compose logs -f

# View logs for specific service
docker compose logs -f api-monitoring-app
```

## API Endpoints

*Note: API endpoints will be documented here once implemented.*

## Database Schema

### PostgreSQL Tables
- User management tables
- API monitoring configurations
- Analytics data

### MongoDB Collections
- API request logs
- Performance metrics
- Alert configurations

## Development

### Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start databases with Docker:**
   ```bash
   docker compose up postgres mongodb rabbitmq -d
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

### Running Tests

```bash
npm test
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment (development/production) | development |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRES_IN` | JWT expiration time | 24h |
| `POSTGRES_HOST` | PostgreSQL host | localhost |
| `POSTGRES_PORT` | PostgreSQL port | 5432 |
| `POSTGRES_DB` | PostgreSQL database name | api_monitoring |
| `POSTGRES_USER` | PostgreSQL username | postgres |
| `POSTGRES_PASSWORD` | PostgreSQL password | - |
| `MONGODB_URI` | MongoDB connection URI | - |
| `RABBITMQ_URL` | RabbitMQ connection URL | - |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please contact the development team or create an issue in the repository.