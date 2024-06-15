FROM ghcr.io/ghostwriter/php:8.3-fpm
# Установка компонентов
RUN set -ex \
      && apk --no-cache add supervisor postgresql-dev nginx \
      && docker-php-ext-install pdo pdo_pgsql bcmath

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN docker-php-ext-install exif

RUN docker-php-ext-enable exif \
    redis

RUN apk add --no-cache \
      freetype \
      libjpeg-turbo \
      libpng \
      freetype-dev \
      libwebp-dev \
      libjpeg-turbo-dev \
      libpng-dev \
    && docker-php-ext-configure gd \
      --with-freetype=/usr/include/ \
      --with-jpeg=/usr/include/ \
      --with-webp=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-enable gd \
    && apk del --no-cache \
      freetype-dev \
      libjpeg-turbo-dev \
      libpng-dev \
    && rm -rf /tmp/*

COPY /docker/php/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

COPY .  /var/www/html

#COPY ./docker/php/php-fpm.conf /usr/local/etc
COPY ./docker/php/php.ini /usr/local/etc/php/conf.d/app.ini

# Разрешение Composer работать от имени суперпользователя
ENV COMPOSER_ALLOW_SUPERUSER=1

WORKDIR /var/www/html

## Копирование содержимого папки core в папку /home/app внутри контейнера
#COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html

# Копирование composer.json и composer.lock
COPY /composer.json  /var/www/html/
COPY /composer.lock  /var/www/html/

# Установка всех зависимостей composer
#RUN composer install --no-dev --optimize-autoloader --no-cache --no-scripts

COPY .env /var/www/html/.env

COPY /docker/nginx/nginx.conf /etc/nginx/nginx.conf
#COPY /docker/redis/redis.conf /usr/local/etc/redis/redis.conf

EXPOSE 81
EXPOSE ${REDIS_PORT}
EXPOSE ${DB_PORT}
CMD ["/usr/bin/supervisord", "-n", "-c",  "/etc/supervisor/conf.d/supervisord.conf"]
