function inserirAluno(){
   
    var aluno = document.getElementById("aluno");   
    
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var dnascimento = document.getElementById("dnascimento").value;
    var nota_final = document.getElementById("nota_final").value;
    var msg;
    if (nome == "" || telefone == "" || dnascimento == "" || nota_final == "" ) {
        alert("Verifique os campos e preencha todos corretamente");
    }else{ 
        if (aluno.innerHTML == null || aluno.innerHTML == "") {
       msg ="Nome: " + nome + " / Telefone: " + telefone + " / Data de Nascimento: " + dnascimento + " / Nota Final: " +nota_final; 
       alert("Aluno cadastrado com sucesso");
     
        }else {
        msg = "<br> Nome: " + nome + " / Telefone: " + telefone + " / Data de Nascimento: " + dnascimento + " / Nota Final: " +nota_final;
        alert("Aluno cadastrado com sucesso");
        
        }
        aluno.innerHTML += msg; 
    }
    
        
    

 
      
    
}
    
   
    
    
    
   
    

function deletarAluno(){}
function alterarAluno(){}
function exibir(){}



