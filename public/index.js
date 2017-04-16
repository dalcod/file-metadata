$(function(){
    // Il form reindirizza su una nuova pagina perciò è necessario che alla sottomissione della richiesta questa eviti di portarci da un'altra parte, questo il motivo della scelta di gestire la richiesta ajax all'interno dell'evento "submit" ritornando immediatamente "false" in modo tale da impedirne il comportamento predefinito.
    $("form").submit(function(e){
        //e.preventDefault();
        
    });
});