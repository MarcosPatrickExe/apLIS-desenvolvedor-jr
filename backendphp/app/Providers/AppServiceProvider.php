<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // reduz o tamanho do varchar para não ultrapassar o varchar do campo da tabela
        // pois o laravel usa 4 bytes pra representar cada caractere do varchar!
        Schema::defaultStringLength(191);
    }
}
