(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(e,o,r){"use strict";r.r(o),r.d(o,"HomeModule",function(){return R});var n=r("PCNd"),t=r("SVse"),a=r("iInd"),s=r("8Y7J");let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s.Bb({type:e,selectors:[["app-home"]],decls:6,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-6","mb-2"],["src","assets/img/home.jpg","alt","Imagem de um gato para as boas vindas",1,"img-fluid","d-none","d-sm-block"],[1,"col-md-6"]],template:function(e,o){1&e&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Kb(2,"div",2),s.Ib(3,"img",3),s.Jb(),s.Kb(4,"div",4),s.Ib(5,"router-outlet"),s.Jb(),s.Jb(),s.Jb())},directives:[a.e],styles:[""]}),e})();var u=r("vkgz"),l=r("AytR"),m=r("IheW"),c=r("7oKD");const b=l.a.apiURL;let p=(()=>{class e{constructor(e,o){this.httpClient=e,this.usuarioService=o}autenticar(e,o){return this.httpClient.post(b+"/user/login",{userName:e,password:o},{observe:"response"}).pipe(Object(u.a)(e=>{var o;const r=null!==(o=e.headers.get("x-access-token"))&&void 0!==o?o:"";this.usuarioService.salvaToken(r)}))}}return e.\u0275fac=function(o){return new(o||e)(s.Ob(m.b),s.Ob(c.a))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=r("s7LF"),d=r("E1ld");function f(e,o){1&e&&s.Ib(0,"app-mensagem",12)}function v(e,o){1&e&&s.Ib(0,"app-mensagem",13)}const h=function(){return["novousuario"]};let I=(()=>{class e{constructor(e,o){this.authService=e,this.router=o,this.usuario="",this.senha=""}ngOnInit(){}login(){this.authService.autenticar(this.usuario,this.senha).subscribe(()=>{this.router.navigate(["animais"])},e=>{alert("Usu\xe1rio ou senha inv\xe1lido"),console.log(e)})}}return e.\u0275fac=function(o){return new(o||e)(s.Hb(p),s.Hb(a.b))},e.\u0275cmp=s.Bb({type:e,selectors:[["app-login"]],decls:18,vars:7,consts:[[1,"text-center"],[1,"form","mt-4",3,"ngSubmit"],["loginForm","ngForm"],[1,"form-group"],["placeholder","Nome do usu\xe1rio","name","usuario","required","",1,"form-control",3,"ngModel","ngModelChange"],["campoUsuario","ngModel"],["mensagem","Usu\xe1rio obrigat\xf3rio",4,"ngIf"],["type","password","placeholder","Senha","name","senha","required","",1,"form-control",3,"ngModel","ngModelChange"],["campoSenha","ngModel"],["mensagem","Senha obrigat\xf3ria",4,"ngIf"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[3,"routerLink"],["mensagem","Usu\xe1rio obrigat\xf3rio"],["mensagem","Senha obrigat\xf3ria"]],template:function(e,o){if(1&e&&(s.Kb(0,"h4",0),s.jc(1,"Login"),s.Jb(),s.Kb(2,"form",1,2),s.Rb("ngSubmit",function(){return o.login()}),s.Kb(4,"div",3),s.Kb(5,"input",4,5),s.Rb("ngModelChange",function(e){return o.usuario=e}),s.Jb(),s.hc(7,f,1,0,"app-mensagem",6),s.Jb(),s.Kb(8,"div",3),s.Kb(9,"input",7,8),s.Rb("ngModelChange",function(e){return o.senha=e}),s.Jb(),s.hc(11,v,1,0,"app-mensagem",9),s.Jb(),s.Kb(12,"button",10),s.jc(13," Login "),s.Jb(),s.Jb(),s.Kb(14,"p"),s.jc(15,"N\xe3o \xe9 um usu\xe1rio?"),s.Kb(16,"a",11),s.jc(17,"Se cadastre!"),s.Jb(),s.Jb()),2&e){const e=s.dc(3),r=s.dc(6),n=s.dc(10);s.xb(5),s.Zb("ngModel",o.usuario),s.xb(2),s.Zb("ngIf",r.invalid&&r.touched),s.xb(2),s.Zb("ngModel",o.senha),s.xb(2),s.Zb("ngIf",n.invalid&&n.touched),s.xb(1),s.Zb("disabled",e.invalid),s.xb(4),s.Zb("routerLink",s.ac(6,h))}},directives:[g.n,g.h,g.i,g.b,g.l,g.g,g.j,t.l,a.c,d.a],styles:[""]}),e})();function U(e){const o=e.value;return o!==o.toLowerCase()?{minusculo:!0}:null}function x(e){var o,r,n,t;const a=null!==(r=null===(o=e.get("userName"))||void 0===o?void 0:o.value)&&void 0!==r?r:"",s=null!==(t=null===(n=e.get("password"))||void 0===n?void 0:n.value)&&void 0!==t?t:"";return a.trim()+s.trim()?a!==s?null:{senhaIgualUsuario:!0}:null}const J=l.a.apiURL;let w=(()=>{class e{constructor(e){this.http=e}cadastraNovoUsuario(e){return this.http.post(J+"/user/signup",e)}verificaUsuarioExistente(e){return this.http.get(`${J}/user/exists/${e}`)}}return e.\u0275fac=function(o){return new(o||e)(s.Ob(m.b))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var K=r("eIep"),N=r("lJxs"),S=r("SxV6");let F=(()=>{class e{constructor(e){this.novoUsuarioService=e}usuarioJaExite(){return e=>e.valueChanges.pipe(Object(K.a)(e=>this.novoUsuarioService.verificaUsuarioExistente(e)),Object(N.a)(e=>e?{usuarioExistente:!0}:null),Object(S.a)())}}return e.\u0275fac=function(o){return new(o||e)(s.Ob(w))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function y(e,o){1&e&&s.Ib(0,"app-mensagem",15)}function j(e,o){1&e&&s.Ib(0,"app-mensagem",16)}function C(e,o){1&e&&s.Ib(0,"app-mensagem",17)}function k(e,o){1&e&&s.Ib(0,"app-mensagem",18)}function E(e,o){1&e&&s.Ib(0,"app-mensagem",19)}function Z(e,o){1&e&&s.Ib(0,"app-mensagem",20)}const L=function(){return[""]},M=[{path:"",component:i,children:[{path:"",component:I},{path:"novousuario",component:(()=>{class e{constructor(e,o,r,n){this.formBuilder=e,this.novoUsuarioService=o,this.usuarioExistenteServive=r,this.router=n}ngOnInit(){this.novoUsuarioForm=this.formBuilder.group({email:["",[g.m.required,g.m.email]],fullName:["",[g.m.required,g.m.minLength(4)]],userName:["",[U],[this.usuarioExistenteServive.usuarioJaExite()]],password:[""]},{validators:[x]})}cadastrar(){if(this.novoUsuarioForm.valid){const e=this.novoUsuarioForm.getRawValue();this.novoUsuarioService.cadastraNovoUsuario(e).subscribe(()=>{this.router.navigate([""])},e=>{console.log(e)})}}}return e.\u0275fac=function(o){return new(o||e)(s.Hb(g.c),s.Hb(w),s.Hb(F),s.Hb(a.b))},e.\u0275cmp=s.Bb({type:e,selectors:[["app-novo-usuario"]],decls:23,vars:9,consts:[[1,"text-center"],[1,"form","mt-4",3,"formGroup","submit"],[1,"form-group"],["placeholder","e-mail","formControlName","email",1,"form-control"],["mensagem","E-mail obrigat\xf3rio",4,"ngIf"],["mensagem","E-mail no formato incorreto",4,"ngIf"],["placeholder","Nome Completo","formControlName","fullName",1,"form-control"],["mensagem","Nome incorreto",4,"ngIf"],["placeholder","Usu\xe1rio","formControlName","userName",1,"form-control"],["mensagem","Usu\xe1rio deve ser em letra min\xfascula",4,"ngIf"],["mensagem","Usu\xe1rio j\xe1 existe",4,"ngIf"],["type","password","placeholder","Senha","formControlName","password",1,"form-control"],["mensagem","Senha deve ser diferente do usu\xe1rio",4,"ngIf"],[1,"btn","btn-primary","btn-block"],[3,"routerLink"],["mensagem","E-mail obrigat\xf3rio"],["mensagem","E-mail no formato incorreto"],["mensagem","Nome incorreto"],["mensagem","Usu\xe1rio deve ser em letra min\xfascula"],["mensagem","Usu\xe1rio j\xe1 existe"],["mensagem","Senha deve ser diferente do usu\xe1rio"]],template:function(e,o){if(1&e&&(s.Kb(0,"h4",0),s.jc(1,"Registre-se e mostre seu pet ao mundo!"),s.Jb(),s.Kb(2,"form",1),s.Rb("submit",function(){return o.cadastrar()}),s.Kb(3,"div",2),s.Ib(4,"input",3),s.hc(5,y,1,0,"app-mensagem",4),s.hc(6,j,1,0,"app-mensagem",5),s.Jb(),s.Kb(7,"div",2),s.Ib(8,"input",6),s.hc(9,C,1,0,"app-mensagem",7),s.Jb(),s.Kb(10,"div",2),s.Ib(11,"input",8),s.hc(12,k,1,0,"app-mensagem",9),s.hc(13,E,1,0,"app-mensagem",10),s.Jb(),s.Kb(14,"div",2),s.Ib(15,"input",11),s.hc(16,Z,1,0,"app-mensagem",12),s.Jb(),s.Kb(17,"button",13),s.jc(18,"Cadastro"),s.Jb(),s.Jb(),s.Kb(19,"p"),s.jc(20,"J\xe1 um usu\xe1rio? "),s.Kb(21,"a",14),s.jc(22," Fa\xe7a Login"),s.Jb(),s.Jb()),2&e){let e=null,r=null,n=null,t=null,a=null;s.xb(2),s.Zb("formGroup",o.novoUsuarioForm),s.xb(3),s.Zb("ngIf",(null==(e=o.novoUsuarioForm.get("email"))||null==e.errors?null:e.errors.required)&&(null==(e=o.novoUsuarioForm.get("email"))?null:e.touched)),s.xb(1),s.Zb("ngIf",(null==(r=o.novoUsuarioForm.get("email"))||null==r.errors?null:r.errors.email)&&(null==(r=o.novoUsuarioForm.get("email"))?null:r.touched)),s.xb(3),s.Zb("ngIf",(null==(n=o.novoUsuarioForm.get("fullName"))?null:n.errors)&&(null==(n=o.novoUsuarioForm.get("fullName"))?null:n.touched)),s.xb(3),s.Zb("ngIf",(null==(t=o.novoUsuarioForm.get("userName"))||null==t.errors?null:t.errors.minusculo)&&(null==(t=o.novoUsuarioForm.get("userName"))?null:t.touched)),s.xb(1),s.Zb("ngIf",null==(a=o.novoUsuarioForm.get("userName"))||null==a.errors?null:a.errors.usuarioExistente),s.xb(3),s.Zb("ngIf",null==o.novoUsuarioForm.errors?null:o.novoUsuarioForm.errors.senhaIgualUsuario),s.xb(5),s.Zb("routerLink",s.ac(8,L))}},directives:[g.n,g.h,g.e,g.b,g.g,g.d,t.l,a.c,d.a],styles:[""]}),e})()}]}];let O=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(o){return new(o||e)},imports:[[a.d.forChild(M)],a.d]}),e})(),R=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(o){return new(o||e)},imports:[[t.c,O,g.f,n.a]]}),e})()}}]);