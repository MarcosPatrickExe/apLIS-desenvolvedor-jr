<?php

namespace App\Http\Controllers;

use App\Models\Medico;
use Illuminate\Http\Request;

class MedicoController extends Controller{

    // GET
    public function index(){

        $medicos = Medico::all();  // aqui o laravel já roda o comando SQL "SELECT * FROM medicos"

        if(  $medicos->isEmpty() ){
            return response() -> json( [
                'message'=> 'Nenhum médico cadastrado. ' ,
            ], status: 200 );

        }else{
            return response() -> json(  $medicos );
        }
    }

    //POST
    public function store( Request $request ) {

        $request->validate( rules:[
            'nome' => 'required',
            'crm' => 'required',
            'uf_crm' =>'required | size: 2',
        ]);

      $medico = Medico::create($request->all());

        return response()->json([
            'message' => 'Médico criado com sucesso',
            'data' => $medico
        ], status : 201);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(){
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Medico $medico){
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Medico $medico){
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Medico $medico){
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Medico $medico){
        //
    }
}
