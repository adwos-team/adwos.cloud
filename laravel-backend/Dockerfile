# Используем официальный образ PHP с FPM
FROM php:8.2-fpm

# Установка системных зависимостей и расширений PHP
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libpq-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql pdo_pgsql mbstring exif pcntl bcmath opcache

# Установка Composer
COPY --from=composer:2.5 /usr/bin/composer /usr/bin/composer

# Установка рабочей директории
WORKDIR /var/www

# Копирование файлов
COPY . /var/www

# Установка прав для пользователя www-data
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www

# Установка зависимостей проекта через Composer
RUN composer install --prefer-dist --no-dev --optimize-autoloader

# Экспонирование порта
EXPOSE 9000

# Запуск PHP-FPM
CMD ["php-fpm"]
