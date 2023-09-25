import {IdGenerator} from "../../domain/services/IdGenerator.js"
import crypto from "node:crypto"
export class IdGeneratorNode extends IdGenerator {
    generate(){
        return crypto.randomUUID();
    }
}