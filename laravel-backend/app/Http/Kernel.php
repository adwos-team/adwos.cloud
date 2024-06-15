<?php

// app/Http/Kernel.php
protected $middleware = [
    // другие middleware
    \App\Http\Middleware\Cors::class,
];
