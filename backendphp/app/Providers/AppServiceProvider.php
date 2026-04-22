<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider{
    /**
     * Register any application services.
     */
    public function register(): void{
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void{

        // adicionando prefixo 'api/' para todas as rotas
        Route::middleware('api')->prefix('api')->group(base_path('routes/web.php'));

        // reduz o tamanho do varchar para não ultrapassar o varchar do campo da tabela
        // pois o laravel usa 4 bytes pra representar cada caractere do varchar!
        Schema::defaultStringLength(191);
    }
}
