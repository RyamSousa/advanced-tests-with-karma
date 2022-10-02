# Module 1
- Revisão de conceitos do curso anterior
- Criação do component PhotoFrame
- Aplicação do pattern debounce

# Module 2
- **fakeAsync** and **tick** are used together to control the execution time
- Tests that make DOM integration are slower

- O papel da função fakeAsync
- Controle de tempo com a função tick
- Teste de integração com o DOM
- Teste de atributos
- Testando a acessibilidade

# Module 3
- **fixture.debugElement.nativeElement** provide some options used for angular that are different the only
    **fixture.nativeElement**, for example *fixture.debugElement.query()* 

- Simulação de cliques
- Emissão de eventos de UI
- Combinando dois eventos em um através de diretiva
- Teste de diretiva
- Diferença entre debugElemententre e nativeElement

# Module 4
- **ngOnChanges** are called only via template component
- **ngOnChanges** is not called by the *fixture.detectChanges()*, are necessary to call manually 

- Os cuidados com ngOnChanges
- Diferentes abordagens para testar ngOnChanges
- Criar SimpleChanges programaticamente

# Module 5
- **TestBed.inject** is used to inject any service that exist in modules hierachy of your component
- **spyOn** has very usages for mocking, include mock component properties  behavior and services return
- **HttpClientModule** When used in place of the *HttpClientModule*, it'll provide a special *HttpClient* instance that can be controlled in our tests.
- **HttpTestingController** Controller to be injected into tests, that allows for mocking and flushing of requests.

- Testes de componentes com escopo de página
- Spy com resposta programada
- Injeção de serviços em nossos testes
- Testes de serviços que acessam API's com HttpClientTestingModule
- Uso dos mock providers

