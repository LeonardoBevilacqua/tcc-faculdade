# Estruturação modular

- A aplicação esta seguindo uma estruturação **modular**, separando cada _route_ do projeto em seu proprio _module_, permitindo assim que cada modulo apenas seja responsivel de uma pequena parte do sistema.

- Abaixo está a representação da estrutura das pastas.
    ```
    |- src
        |- app
            |- modules
                |- home
                |- profile
                |- anotherModule
    ```

## Estrutura do modulo

- Dentro da pasta do modulo, esta presente dois arquivos _typescripts_, sendo referentes ao modulo em si e o arquivo _routing_.
    ``modulo-routing.module.ts``
    ``modulo.module.ts``
- Além disso, o mudulo possui uma pasta de _pages_, onde deve ficar o _component_ da página, e uma pasta _components_, onde fica armazenado os componentes que seram utilizados dentro do modulo.
    ```
    |- components
        -| home-section
            home-section.component.html
            home-section.component.scss
            home-section.component.spec.ts
            home-section.component.ts
    |- pages
        |- home
            home.component.html
            home.component.scss
            home.component.spec.ts
            home.component.ts
    |- home-routing.module.ts
    |- home.module.ts
    ```

## Modulos padrões

- Existe também dois modulos padrões sendo os modulos _core_ e _shared_.
    - Core Module:
        - Assume papel do AppModule.
        - Deve conter services, authentication, guards, http, interceptors, mocks.
        - Ao ser criado um novo _service_ deve ser adicionado a referencia dentro no modulo, no atributo _providers_.
    - Shared Module:
        - Responsável por guardar itens que seram utilizados por toda aplicação.
        - Geralmente contem components, pipes, filters, models.

## Comandos para criação de um novo modulo

* Dentro da pasta do modulo, deve ser realizado o comando.
    `ng g module <name> --routing=true`
* Em seguida, deve ser criado a pastas `pages`, para incluir o componente da página e criado o componente da página.
    `ng g c <component>`
* Se necessário componentes extras, criar a pasta `components`.

-----

# Formularios

- Foi criado uma abstração dos formularios, com proposito de evitar retrabalho e repetição de código.

## Padrão do _html_

- Dentro da tag `form`, deve ser inserido um id e o atributo `(ngSubmit)` responsável por controlar o envio do formulario. Por padrão, deve ser verificado se é valido e ser chamado a função `onSubmit()`.
- Dentro da tag `input`, deve ser inserido o atributo `[(ngModel)]` referenciando uma propriedade da variavel `model`, e o id do campo como um `ngModel`.
- Para mensagem de validação, existe o componente `validation-message`, que recebe como parâmetro o id que foi dado para a tag.
- Exemplo abaixo:
```
   <form 
        #NOME_DO_FORMULARIO="ngForm" 
        (ngSubmit)="NOME_DO_FORMULARIO.form.valid && onSubmit()">

        <input 
            email 
            required minlength="3" 
            type="email" 
            id="exampleFormControlInput1"
            name="exampleFormControlInput1" 
            placeholder="name@example.com"
            [(ngModel)]="model.exampleFormControlInput1" 
            #exampleFormControlInput1="ngModel">

        <validation-message 
            [inputControl]="exampleFormControlInput1">
        </validation-message>

        <button 
            type="submit"
            [disabled]="!NOME_DO_FORMULARIO.form.valid">
            submit
        </button>
    </form>
```
## Padrão do _typescript_

- A classe do componente que for formulario, deve extender `MaintainForm` passando sua entidade como parâmetro.
- O `constructor` deve receber instancias do _service_, _Router_, _ToastrService_ e _Ng4LoadingSpinnerService_.
- Exemplo abaixo:
```
export class TestesComponent extends MaintainForm<Testes> implements OnInit {

  constructor(testesService: TestesService, router: Router, toastr: ToastrService, spinnerService: Ng4LoadingSpinnerService) { 
      super(testesService, router, toastr, spinnerService);
  }

  ngOnInit() {
      super.ngOnInit();

      this.model = new Testes();
  }
}
```
