# Grainmasters App

A Laravel-based supply-chain, workflow and ERP application for GrainMasters, an agribusiness company that is into the aggregate, supply, sales and trading of agricultural produce.

## Requirements

- PHP >= 8.0
- Composer
- MySQL/PostgreSQL
- Node.js & NPM

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/grainmasters-app.git
    cd grainmasters-app
    ```

2. Install PHP dependencies:
    ```bash
    composer install
    ```

3. Install JavaScript dependencies:
    ```bash
    npm install
    ```

4. Compile assets:
    ```bash
    npm run dev
    ```

5. Create environment file:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

6. Configure your database in the .env file

7. Run migrations:
    ```bash
    php artisan migrate
    ```

8. Seed the database (optional):
    ```bash
    php artisan db:seed
    ```

## Usage

Start the local development server:
```bash
php artisan serve
```

The application will be available at `http://localhost:8000`

## Features

- Grain inventory management
- User authentication and authorization
- [Add more features here]

## Testing

Run tests with:
```bash
php artisan test
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).
