<?php

namespace App\Http\Controllers;

use App\Models\Medico;
use Illuminate\Http\Request;
use Symfony\Component\Console\Output\ConsoleOutput;

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
        $out = new ConsoleOutput();
        $out->writeln("\n testando request->CRM :  {$request->CRM} \n");

        $data = $request->all();
        $data['crm'] = $data['crm'] ?? $data['CRM'] ?? null;
        $data['uf_crm'] = $data['uf_crm'] ?? $data['UFCRM'] ?? null;
        $request->merge($data);

        $medico = Medico::where('crm', $request->CRM)->first();
        if ($medico) {
            return response()->json([
                'message' => 'Já existe um médico com esse CRM'
            ], 404);
        }

        $request->validate( [
            'nome' => 'required',
            'crm' => 'required',
            'uf_crm' =>'required|size:2',
          ],
        );

        $medico = Medico::create([
              'nome' => $request->nome,
              'crm' => $request->CRM,
              'uf_crm' => $request->UFCRM,
        ]);

        return response()->json([
                'message' => 'Médico criado com sucesso',
                'data' => $medico
        ], status : 201);
    }


     // DELETE
    public function destroy( $id ){
        $medico = Medico::findOrFail($id );

        if(!$medico){
            return response()->json([
                'message'=> 'Médico não encontrado'
            ], 404);
        }

        $medico->delete();

        return response()->json([
            'message' => 'Médico removido com sucesso'
        ]);
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


}
