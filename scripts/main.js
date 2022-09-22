let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

const btnConfirmar = document.querySelector(".confirmar");
const btnCancelar = document.querySelector(".cancelar");
const btnPedir = document.querySelector(".fazer-pedido");

window.onload = () => {
  new Prato(document.querySelector(".opcoes.prato"), "Estrombelete de Frango", "img/frango_yin_yang.png", "Um pouco de batata, um pouco de salada", 14.9)
  new Prato(document.querySelector(".opcoes.prato"), "Asa de Boi", "img/frango_yin_yang.png", "Um pouco de batata, um pouco de salada", 14.9)
  new Prato(document.querySelector(".opcoes.prato"), "Carne de Monstro", "img/frango_yin_yang.png", "Um pouco de batata, um pouco de salada", 14.9)

  new Bebida(document.querySelector(".opcoes.bebida"), "Coquinha gelada", "img/coquinha_gelada.png", "Lata 350ml", 4.9)
  new Bebida(document.querySelector(".opcoes.bebida"), "Caldo de Cana", "img/coquinha_gelada.png", "Lata 600ml", 4.9)
  new Bebida(document.querySelector(".opcoes.bebida"), "Corote Gelado", "img/coquinha_gelada.png", "Lata 400ml", 4.9)

  new Sobremesa(document.querySelector(".opcoes.bebida"), "Pudim", "img/pudim.png", "Gosto de doce de leite", 7.9)
  new Sobremesa(document.querySelector(".opcoes.bebida"), "Flam", "img/pudim.png", "Gosto de chocolate", 7.9)
  new Sobremesa(document.querySelector(".opcoes.bebida"), "Brigadeiro", "img/pudim.png", "3 unidades", 7.9)

  new Pedido(new Prato(pratoSelecionado.nome, pratoSelecionado.preco), new Bebida(bebidaSelecionada.nome, bebidaSelecionada.preco), new Sobremesa(sobremesaSelecionada.nome, sobremesaSelecionada.preco))
}

class Prato {
  constructor(elemento, nome, imagem, descricao, preco) {
    this.elemento = elemento
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.teste = null;

    console.log(this)

    this.adicioarPratos()
  }

  adicioarPratos() {
    const pratosContainer = document.querySelector(".opcoes.prato");
    pratosContainer.appendChild(this.getPratoView());
  }

  getPratoView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener("click", () => {
      this.selecionarPrato();
    });
    view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>
      `;
    this.teste = view
    return view;
  }

  selecionarPrato() {
    const selecionado = document.querySelector(".opcao.selecionado.p");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
      selecionado.classList.remove("p");
    }
    
    this.teste.classList.add("selecionado");
    this.teste.classList.add("p");

    pratoSelecionado = {
      nome: this.nome,
      preco: this.preco,
    };
    verificarPedido();
  }
}

class Bebida {
  constructor(elemento, nome, imagem, descricao, preco) {
    this.elemento = elemento;
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.teste = null;

    this.adicionarBebidas()
  }

  adicionarBebidas() {
    const bebidasContainer = document.querySelector(".opcoes.bebida");
    bebidasContainer.appendChild(this.getBebidaView())
  }

  getBebidaView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener("click", () => {
      this.selecionarBebida();
    });
    view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>
      `;
    this.teste = view;
    return view;
  }

  selecionarBebida() {
    const selecionado = document.querySelector(".opcao.selecionado.b");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
      selecionado.classList.remove("b");
    }
    
    this.teste.classList.add("selecionado");
    this.teste.classList.add("b");

    bebidaSelecionada = { nome: this.nome, preco: this.preco };
    verificarPedido();
  }
}

class Sobremesa {
  constructor(elemento, nome, imagem, descricao, preco) {
    this.elemento = elemento;
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.teste = null;

    this.adicionarSobremesas()
  }

  adicionarSobremesas() {
    const sobremesasContainer = document.querySelector(".opcoes.sobremesa");
    sobremesasContainer.appendChild(this.getSobremesaView())
  }

  getSobremesaView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener("click", () => {
      this.selecionarSobremesa();
    });
    view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>
      `;

    this.teste = view
    return view;
  }

  selecionarSobremesa() {
    const selecionado = document.querySelector(".opcao.selecionado.s");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
      selecionado.classList.remove("s");
    }
    
    this.teste.classList.add("selecionado");
    this.teste.classList.add("s");

    sobremesaSelecionada = { nome: this.nome, preco: this.preco };
    verificarPedido();
  }
}

class Pedido {
  constructor(prato, bebida, sobremesa) {
    this.prato = prato;
    this.bebida = bebida;
    this.sobremesa = sobremesa
  }
}

function getPrecoTotal() {
  return (
    pratoSelecionado.preco +
    bebidaSelecionada.preco +
    sobremesaSelecionada.preco
  );
}

function confirmarPedido() {
  const modal = document.querySelector(".overlay");
  modal.classList.remove("escondido");

  document.querySelector(".confirmar-pedido .prato .nome").innerHTML =
    pratoSelecionado.nome;
  document.querySelector(".confirmar-pedido .prato .preco").innerHTML =
    pratoSelecionado.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .bebida .nome").innerHTML =
    bebidaSelecionada.nome;
  document.querySelector(".confirmar-pedido .bebida .preco").innerHTML =
    bebidaSelecionada.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML =
    sobremesaSelecionada.nome;
  document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML =
    sobremesaSelecionada.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .total .preco").innerHTML =
    getPrecoTotal().toFixed(2);
}

function cancelarPedido() {
  const modal = document.querySelector(".overlay");
  modal.classList.add("escondido");
}

function enviarZap() {
  const telefoneRestaurante = 553299999999;
  const encodedText = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n- Prato: ${pratoSelecionado.nome
    } \n- Bebida: ${bebidaSelecionada.nome} \n- Sobremesa: ${sobremesaSelecionada.nome
    } \nTotal: R$ ${getPrecoTotal().toFixed(2)}`
  );

  const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
  window.open(urlWhatsapp);
}

function verificarPedido() {
  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
    btnPedir.classList.add("ativo");
    btnPedir.disabled = false;
    btnPedir.innerHTML = "Fazer pedido";
  }
}

btnConfirmar.addEventListener("click", () => {
  enviarZap();
});

btnCancelar.addEventListener("click", () => {
  cancelarPedido();
});

btnPedir.addEventListener("click", () => {
  confirmarPedido();
});
