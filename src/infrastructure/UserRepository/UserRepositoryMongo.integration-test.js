import { describe, it, expect, vi, beforeEach, afterEach, afterAll, beforeAll } from "vitest"
import { User } from "../../domain/models/User.js"
import { UserRepositoryMongo } from "./UserRepositoryMongo";

describe("UserRepositoryMongo", () => {
    //arrange act assert

    const userRepository = new UserRepositoryMongo();

    beforeAll(function () {
        //userRepository.client.connect();
        userRepository.connect()
    })

    afterAll(function () {
        userRepository.close();
        //userRepository.client.close();
    })

    beforeEach(function () {
        //userRepository.collection.deleteMany();
        userRepository.reset();
    })

    it("should save a user in the mongo db", async () => {
        const id = "7bdc89d8-6235-46fd-b909-e744823dd45f";
        const name = "Juan";
        const email = "juan@email.com";
        const password = "123456";
        const age = 18;
        const user = User.create(id, name, email, password, age);
        await userRepository.save(user);

        const userFound = await userRepository.findById(id);

        expect(userFound).toEqual(user);
    })


    it("should search and not find the user with that id in the mongo db", async () => {
        const userRepository = new UserRepositoryMongo();

        const userFound = await userRepository.findById("1234");

        expect(userFound).toBeNull();
    })


    it.only("should search and find the user with that email in the mongo db", async () => {
        const id = "ddd82d06-25fd-4db7-95ce-5556fc169c06";
        const name = "pepe";
        const email = "pepe@email.com";
        const password = "1234567";
        const age = 181;
        const user = User.create(id, name, email, password, age);
        await userRepository.save(user);

        const userExists = await userRepository.existsByEmail(email);

        expect(userExists).toBe(true);

    })



});