let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

let mainUser = {name: "Ana", email: "ana@email.com", password: "123456"};

beforeAll(() => {
    return request.post("/user")
    .send(mainUser)
    .then(res => {})
    .catch(err => {console.log(err)});
});

afterAll(() => {
    return request.delete(`/user/${mainUser.email}`)
    .then(res => {})
    .catch(err => {console.log(err)});
});

describe("Cadastro de usuário", () => {
    test("Deve cadastrar um usuário com sucesso", () => {
        let time = Date.now();
        let email = `${time}@gmail.com`;
        let user = {name: "Geisy", email, password: "123456"};

        return request.post("/user").send(user).then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
            
        }).catch(err => {
            fail(err)
        });
    });

    test("Deve impedir que o usuário se cadastre com dados vazios",() => {
        let user = {name: "", email: "", password: ""};

        return request.post("/user").send(user).then(res => {
            expect(res.statusCode).toEqual(400);
        }).catch(err => {
            fail(err)
        });
    });

    test("Deve impedir que o usuário se cadastre com email repetido", () => {
        let time = Date.now();
        let email = `${time}@gmail.com`;
        let user = {name: "Geisy", email, password: "123456"};

        return request.post("/user").send(user).then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
            
            return request.post("/user").send(user).then(res => {
                expect(res.statusCode).toEqual(400);
                expect(res.body.error).toEqual("E-mail já cadastrado");
            }).catch(err => {
                fail(err);
            });
        }).catch(err => {
            fail(err)
        });
    });
});

describe("Autenticação", () => {
    test("Deve retornar token quando logar", () => {
        return request.post("/auth")
        .send({email: mainUser.email, password: mainUser.password})
        .then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.token).toBeDefined();
        }).catch(err => {
            fail(err);
        });
    });

    test("Deve impedir que um usuário não cadastrado se logue", () => {
        return request.post("/auth")
        .send({email: "umemail@qualquer.com", password: "215896"})
        .then(res => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.errors.email).toEqual("E-mail não cadastrado");
        }).catch(err => {
            fail(err);
        });
    });

    test("Deve impedir que um usuário se logue com senha errada", () => {
        return request.post("/auth")
        .send({email: mainUser.email, password: "nuvens"})
        .then(res => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.errors.password).toEqual("Senha incorreta");
        }).catch(err => {
            fail(err);
        });
    });
});