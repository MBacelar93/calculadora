function criaCalculadora(){
    return {
    //ATRIBUTOS
      display: document.querySelector('.display'),
     

     //METODOS
    inicia(){
        this.cliqueBotoes();
        this.bntEnter();
    },

    bntEnter(){
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13){
                this.fazConta();
            }
        });
    },

    fazConta(){
        let resultConta = this.display.value;

        try{
            resultConta = eval(resultConta);

            if(!resultConta){
                alert('Conta Inválida');
                return;
            }

            this.display.value = String(resultConta);
        }catch(e){
            alert('Conta Inválida');
            return;
        }
     },

    clearDisplay(){
        this.display.value = '';
    },
     
    btnClearDel(){
        this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes(){
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnSendDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.btnClearDel();
        }

        if(el.classList.contains('btn-eq')) {
          this.fazConta();
        }
            });
    },

    btnSendDisplay(valor){
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();